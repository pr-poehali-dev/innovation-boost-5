import { cn } from '@/lib/utils';

const cases = [
  {
    id: 1,
    tag: 'Производство / SCADA + 1С',
    title: 'Автоматизация сбора данных со станков с ЧПУ',
    problem: 'Себестоимость считалась вручную — данные со станков вносили операторы, ошибки достигали 20%.',
    result: 'Интегрировал SCADA-систему с 1С ERP: данные со станков передаются автоматически в реальном времени.',
    metric: '+25%',
    metricLabel: 'точность расчёта себестоимости',
    image: 'https://cdn.poehali.dev/projects/b40c8051-801f-49dd-95a0-b162e6becd87/files/ce96ca4f-13d5-44f3-af0c-d5619a2a4cd7.jpg',
  },
  {
    id: 2,
    tag: 'Холдинг / Аналитика',
    title: 'Единая платформа данных для 4 предприятий',
    problem: 'Каждое предприятие вело учёт по-своему — консолидация занимала недели, данные расходились.',
    result: 'Построил единую BI-платформу: все 4 предприятия в одном дашборде, отчёт генерируется в один клик.',
    metric: '4',
    metricLabel: 'предприятия в одной системе',
    image: 'https://cdn.poehali.dev/projects/b40c8051-801f-49dd-95a0-b162e6becd87/files/945c5921-8959-4952-b039-021c3c46d962.jpg',
  },
  {
    id: 3,
    tag: 'IT-бюджет / Оптимизация',
    title: 'Сокращение IT-затрат на 30% без потери качества',
    problem: 'IT-бюджет рос каждый год, но эффект не был очевиден. Руководство требовало оптимизации.',
    result: 'Провёл аудит, пересмотрел вендоров, внедрил Jira + Confluence + SLA. Качество выросло, затраты упали.',
    metric: '−30%',
    metricLabel: 'сокращение IT-затрат',
    image: 'https://cdn.poehali.dev/projects/b40c8051-801f-49dd-95a0-b162e6becd87/files/c5eabe0e-f639-4e35-bc9a-ae5dd4aed270.jpg',
  },
];

export default function CasesSection() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 border-b border-white/10 pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Реальные кейсы
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Результаты, которые можно измерить
          </h2>
          <p className="max-w-xl text-base text-white/50">
            Не теория — внедрения, которые уже работают в производстве, торговле и холдингах.
          </p>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-0">
          {cases.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'group grid grid-cols-1 gap-0 border-b border-white/10 md:grid-cols-2',
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              )}
            >
              {/* Image */}
              <div
                className={cn(
                  'relative h-64 overflow-hidden md:h-80',
                  index % 2 === 1 ? 'md:order-2' : 'md:order-1'
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                {/* Big metric */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-5xl font-bold text-white drop-shadow-lg md:text-6xl">
                    {item.metric}
                  </span>
                  <p className="mt-1 text-xs text-white/70">{item.metricLabel}</p>
                </div>
              </div>

              {/* Content */}
              <div
                className={cn(
                  'flex flex-col justify-center gap-5 px-8 py-10 md:px-12',
                  index % 2 === 1 ? 'md:order-1' : 'md:order-2'
                )}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  {item.tag}
                </span>
                <h3 className="text-xl font-light text-white md:text-2xl">{item.title}</h3>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 text-xs text-red-400">●</span>
                    <p className="text-sm leading-relaxed text-white/50">
                      <span className="text-white/30 font-medium">Проблема: </span>
                      {item.problem}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 text-xs text-green-400">●</span>
                    <p className="text-sm leading-relaxed text-white/70">
                      <span className="text-white/40 font-medium">Решение: </span>
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-base text-white/50">
            Больше шаблонов, чек-листов и разборов — в Telegram-канале
          </p>
          <a
            href="https://t.me/autopilot_for_business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm text-white/80 transition-all hover:border-white hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Автопилот для бизнеса →
          </a>
        </div>
      </div>
    </section>
  );
}
