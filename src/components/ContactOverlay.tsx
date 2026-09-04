import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, Check, AlertCircle, MessageCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://n8n.eduardogouvea.com.br/webhook/leads-site-ctres';
const WHATSAPP_FALLBACK_URL =
  'https://wa.me/5511915617506?text=Ol%C3%A1!%20Tentei%20enviar%20o%20formul%C3%A1rio%20de%20pr%C3%A9-qualifica%C3%A7%C3%A3o%20pelo%20site%20mas%20prefiro%20conversar%20por%20aqui.';

export interface ContactFormData {
  nome_empresa: string;
  numero_pessoas: string;
  data_prevista: string;
  nome_contato: string;
  cargo_contato: string;
  contato: string;
}

const INITIAL_DATA: ContactFormData = {
  nome_empresa: '',
  numero_pessoas: '',
  data_prevista: '',
  nome_contato: '',
  cargo_contato: '',
  contato: '',
};

const PEOPLE_OPTIONS = ['Até 20', '20 a 50', '50 a 100', 'Mais de 100'];

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialPortal?: string | null;
}

export const ContactOverlay: React.FC<ContactOverlayProps> = ({
  isOpen,
  onClose,
  initialPortal,
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Prevent background scrolling when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset or initialize on open
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setStep(1);
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const isCurrentStepValid = (): boolean => {
    switch (step) {
      case 1:
        return formData.nome_empresa.trim().length > 0;
      case 2:
        return formData.numero_pessoas.length > 0;
      case 3:
        return formData.data_prevista.trim().length > 0;
      case 4:
        return (
          formData.nome_contato.trim().length > 0 &&
          formData.cargo_contato.trim().length > 0 &&
          formData.contato.trim().length > 0
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!isCurrentStepValid()) return;
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setStatus('sending');

    const payload = {
      nome_empresa: formData.nome_empresa.trim(),
      numero_pessoas: formData.numero_pessoas,
      data_prevista: formData.data_prevista.trim(),
      nome_contato: formData.nome_contato.trim(),
      cargo_contato: formData.cargo_contato.trim(),
      contato: formData.contato.trim(),
      origem: initialPortal
        ? `Site Institucional - Portal ${initialPortal}`
        : 'Site Institucional',
      data_hora: new Date().toISOString(),
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      setStatus('success');
    } catch (error) {
      console.error('Erro ao enviar dados para n8n:', error);
      setStatus('error');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isCurrentStepValid() && status !== 'sending') {
        handleNext();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/98 backdrop-blur-2xl text-neutral-100 p-6 sm:p-10 select-none overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de pré-qualificação de experiência"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-900/40 rounded-full blur-[160px] pointer-events-none" />

      {/* Top bar with close button */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
        <button
          type="button"
          onClick={handleClose}
          className="p-3 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-neutral-900/60 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          aria-label="Fechar formulário"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col justify-between min-h-[520px] sm:min-h-[560px]">
        {/* Step Indicator Header */}
        {status !== 'success' && (
          <div className="flex items-center justify-between pb-8">
            <span className="font-tension text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-500">
              05 / Pré-Qualificação · Etapa {step} de 4
            </span>
          </div>
        )}

        {/* Content Body with Animated Transitions */}
        <div className="flex-1 flex flex-col justify-center py-6 sm:py-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6 max-w-lg mx-auto py-8"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-200">
                  <Check className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-editorial text-3xl sm:text-4xl text-neutral-100 font-light">
                    Recebemos seu contato.
                  </h3>
                  <p className="font-body text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                    Em breve alguém da equipe vai falar com você para desenhar a imersão ideal.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-8 py-3.5 bg-neutral-100 hover:bg-white text-neutral-950 font-tension text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300"
                  >
                    Concluir
                  </button>
                </div>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6 max-w-lg mx-auto py-8"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-red-400">
                  <AlertCircle className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-neutral-100 font-light">
                    Algo deu errado.
                  </h3>
                  <p className="font-body text-neutral-400 text-sm font-light leading-relaxed">
                    Tente reenviar seus dados ou fale direto com a gente pelo WhatsApp.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full sm:w-auto px-6 py-3 bg-neutral-100 hover:bg-white text-neutral-950 font-tension text-xs uppercase tracking-[0.2em] font-bold transition-all"
                  >
                    Tentar Novamente
                  </button>
                  <a
                    href={WHATSAPP_FALLBACK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 font-tension text-xs uppercase tracking-[0.2em] transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direto</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Step 1: Nome da empresa */}
                {step === 1 && (
                  <div className="space-y-6">
                    <label
                      htmlFor="input-empresa"
                      className="block font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-100 font-light leading-tight"
                    >
                      Qual o nome da sua empresa?
                    </label>
                    <div className="pt-2">
                      <input
                        id="input-empresa"
                        type="text"
                        autoFocus
                        value={formData.nome_empresa}
                        onChange={(e) =>
                          setFormData({ ...formData, nome_empresa: e.target.value })
                        }
                        onKeyDown={handleKeyDown}
                        placeholder="Nome da organização"
                        className="w-full bg-transparent border-b-2 border-neutral-700 focus:border-neutral-200 text-xl sm:text-2xl text-neutral-100 py-3 px-1 placeholder:text-neutral-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Número estimado de pessoas */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-100 font-light leading-tight">
                      Qual o número estimado de pessoas no evento?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {PEOPLE_OPTIONS.map((option) => {
                        const isSelected = formData.numero_pessoas === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, numero_pessoas: option });
                            }}
                            className={`p-5 text-left border transition-all duration-200 flex items-center justify-between ${
                              isSelected
                                ? 'bg-neutral-100 text-neutral-950 border-neutral-100'
                                : 'bg-neutral-900/60 hover:bg-neutral-900 border-neutral-800 text-neutral-200'
                            }`}
                          >
                            <span className="font-tension text-sm sm:text-base uppercase tracking-wider">
                              {option}
                            </span>
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                                isSelected
                                  ? 'border-neutral-950 bg-neutral-950'
                                  : 'border-neutral-600'
                              }`}
                            >
                              {isSelected && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Data prevista para o evento */}
                {step === 3 && (
                  <div className="space-y-6">
                    <label
                      htmlFor="input-data-prevista"
                      className="block font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-100 font-light leading-tight"
                    >
                      Qual a data prevista para o evento?
                    </label>
                    <div className="pt-2">
                      <input
                        id="input-data-prevista"
                        type="text"
                        autoFocus
                        value={formData.data_prevista}
                        onChange={(e) =>
                          setFormData({ ...formData, data_prevista: e.target.value })
                        }
                        onKeyDown={handleKeyDown}
                        placeholder="ex: novembro de 2026, ou ainda não sei"
                        className="w-full bg-transparent border-b-2 border-neutral-700 focus:border-neutral-200 text-xl sm:text-2xl text-neutral-100 py-3 px-1 placeholder:text-neutral-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Nome, cargo e contato */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-100 font-light leading-tight">
                        Quem é o responsável pelo contato?
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-neutral-400 font-light">
                        Preencha seus dados para receber nossa proposta personalizada.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label
                          htmlFor="input-nome"
                          className="block text-[11px] font-tension uppercase tracking-widest text-neutral-500 mb-1"
                        >
                          Nome completo
                        </label>
                        <input
                          id="input-nome"
                          type="text"
                          autoFocus
                          value={formData.nome_contato}
                          onChange={(e) =>
                            setFormData({ ...formData, nome_contato: e.target.value })
                          }
                          onKeyDown={handleKeyDown}
                          placeholder="Seu nome"
                          className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-neutral-300 text-sm sm:text-base text-neutral-100 p-3.5 placeholder:text-neutral-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="input-cargo"
                            className="block text-[11px] font-tension uppercase tracking-widest text-neutral-500 mb-1"
                          >
                            Cargo / Área
                          </label>
                          <input
                            id="input-cargo"
                            type="text"
                            value={formData.cargo_contato}
                            onChange={(e) =>
                              setFormData({ ...formData, cargo_contato: e.target.value })
                            }
                            onKeyDown={handleKeyDown}
                            placeholder="ex: RH, Marketing, Diretoria"
                            className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-neutral-300 text-sm sm:text-base text-neutral-100 p-3.5 placeholder:text-neutral-600 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="input-contato"
                            className="block text-[11px] font-tension uppercase tracking-widest text-neutral-500 mb-1"
                          >
                            E-mail ou WhatsApp
                          </label>
                          <input
                            id="input-contato"
                            type="text"
                            value={formData.contato}
                            onChange={(e) =>
                              setFormData({ ...formData, contato: e.target.value })
                            }
                            onKeyDown={handleKeyDown}
                            placeholder="contato@empresa.com ou (11) 9..."
                            className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-neutral-300 text-sm sm:text-base text-neutral-100 p-3.5 placeholder:text-neutral-600 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Navigation & Progress Indicator */}
        {status !== 'success' && status !== 'error' && (
          <div className="pt-6 border-t border-neutral-900/80 flex items-center justify-between">
            {/* Progress Dots Indicator */}
            <div
              className="flex items-center gap-2"
              aria-label={`Etapa ${step} de 4`}
            >
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`transition-all duration-300 rounded-full ${
                    i === step
                      ? 'w-6 h-2 bg-neutral-200'
                      : i < step
                      ? 'w-2 h-2 bg-neutral-400'
                      : 'w-2 h-2 bg-neutral-800'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-tension uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors disabled:opacity-40"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={!isCurrentStepValid() || status === 'sending'}
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-neutral-100 hover:bg-white text-neutral-950 font-tension text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 disabled:opacity-30 disabled:hover:bg-neutral-100 disabled:cursor-not-allowed shadow-lg"
              >
                <span>
                  {status === 'sending'
                    ? 'Enviando...'
                    : step === 4
                    ? 'Enviar'
                    : 'Próxima'}
                </span>
                {status !== 'sending' && (
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
