import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Новая заявка с сайта:\n\nИмя: ${form.name}\nКомпания: ${form.company}\nСообщение: ${form.message}`;
    window.open(`https://t.me/Natalya_iv1?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Контакт
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Обсудим вашу задачу
              </h2>
              <p className="text-base leading-relaxed text-slate-500">
                Оставьте заявку — Наталья ответит в течение 24 часов. Расскажите, с чем столкнулись, и она предложит конкретный первый шаг.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                  💬
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Telegram-канал</p>
                  <a
                    href="https://t.me/autopilot_for_business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    @autopilot_for_business
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                  🕐
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Время ответа</p>
                  <p className="text-xs text-slate-400">в течение 24 часов</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex flex-col gap-6">
            {sent ? (
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-10">
                <span className="text-4xl">✅</span>
                <h3 className="text-xl font-semibold text-slate-900">Спасибо, заявка отправлена!</h3>
                <p className="text-sm text-slate-500">Наталья ответит в Telegram в течение 24 часов.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs text-blue-600 hover:text-blue-700"
                >
                  Отправить ещё одну →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Петров"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition-colors focus:border-blue-400 focus:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Компания</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="ООО «Ваш бизнес»"
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition-colors focus:border-blue-400 focus:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">С чем хотите разобраться?</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Кратко опишите задачу или вопрос — что болит прямо сейчас?"
                    className="resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-300 outline-none transition-colors focus:border-blue-400 focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
                >
                  Отправить заявку →
                </button>
                <p className="text-xs text-slate-400">
                  Нажимая кнопку, вы соглашаетесь на обработку данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}