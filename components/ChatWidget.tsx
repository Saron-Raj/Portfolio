import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getChatSession } from '../services/gemini';
import { ChatMessage, MessageRole } from '../types';
import { GenerateContentResponse } from "@google/genai";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: MessageRole.MODEL,
      text: "Hi there! I'm Saron's AI Assistant. Ask me anything about his work, skills, or experience."
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: inputText
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Optimistic AI message for streaming
      const aiMessageId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: aiMessageId,
        role: MessageRole.MODEL,
        text: '',
        isStreaming: true
      }]);

      const chat = getChatSession();
      const result = await chat.sendMessageStream({ message: userMessage.text });

      let accumulatedText = '';

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          accumulatedText += text;
          setMessages(prev => prev.map(msg => 
            msg.id === aiMessageId 
              ? { ...msg, text: accumulatedText }
              : msg
          ));
        }
      }

      // Finalize message
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId 
          ? { ...msg, isStreaming: false }
          : msg
      ));

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: MessageRole.MODEL,
        text: "I'm having trouble connecting right now. Please try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div className={`
        pointer-events-auto bg-surface border border-slate-700 rounded-2xl shadow-2xl overflow-hidden
        transition-all duration-300 ease-in-out origin-bottom-right
        flex flex-col
        ${isOpen ? 'w-[350px] sm:w-[380px] h-[500px] opacity-100 scale-100 mb-4' : 'w-0 h-0 opacity-0 scale-90'}
      `}>
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2 text-white">
            <Sparkles size={18} className="text-yellow-300" />
            <span className="font-semibold">AI Assistant</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50 backdrop-blur-sm">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-start gap-3 ${msg.role === MessageRole.USER ? 'flex-row-reverse' : ''}`}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center shrink-0
                ${msg.role === MessageRole.MODEL ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-700 text-slate-300'}
              `}>
                {msg.role === MessageRole.MODEL ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className={`
                max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                ${msg.role === MessageRole.MODEL 
                  ? 'bg-surface border border-slate-700 text-slate-200 rounded-tl-none' 
                  : 'bg-indigo-600 text-white rounded-tr-none shadow-md'}
              `}>
                {msg.text}
                {msg.isStreaming && (
                  <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-indigo-400 animate-pulse"/>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-surface border-t border-slate-700 shrink-0">
          <form onSubmit={handleSendMessage} className="relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about my projects..."
              className="w-full bg-background border border-slate-600 text-slate-100 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="absolute right-1.5 top-1.5 p-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </form>
          <div className="mt-2 text-[10px] text-center text-slate-500">
            Powered by Gemini 2.5 Flash
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105
          ${isOpen ? 'bg-slate-700 text-white rotate-90' : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'}
        `}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        
        {!isOpen && (
          <span className="absolute right-0 top-0 -mr-1 -mt-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;