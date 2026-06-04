const services = [
  {
    id: 1,
    emoji: '🔍',
    title: 'Экспресс-аудит ИТ-процессов',
    description: 'Анализ 3–5 ключевых процессов: закрытие периода, согласование закупок, отчётность для CEO. Выявляю узкие места и потери времени.',
    deliverable: 'Отчёт: 3 главные проблемы + 3 готовых решения',
    tag: 'Разовая услуга',
  },
  {
    id: 2,
    emoji: '💰',
    title: 'Аудит ИТ-затрат',
    description: 'Нахожу 20–30% бюджета, которые уходят впустую — без потери качества. Опираюсь на реальный опыт сокращения затрат на 30%.',
    deliverable: 'Отчёт с конкретными статьями экономии и планом действий',
    tag: 'Разовая услуга',
  },
  {
    id: 3,
    emoji: '📅',
    title: 'Дорожная карта цифровой трансформации',
    description: 'План на 1–3 года под ваш бизнес: приоритетные проекты, бюджет, риски, этапы и метрики успеха.',
    deliverable: 'Документ с дорожной картой, готовый к защите перед советом директоров',
    tag: 'Проектная работа',
  },
  {
    id: 4,
    emoji: '🧑‍💼',
    title: 'Внешний ИТ-директор (0,5 ставки)',
    description: 'Участие в стратегических сессиях, дорожная карта цифровизации, контроль подрядчиков, аудит проектов.',
    deliverable: 'Полноценный CIO без найма в штат',
    tag: 'Абонемент',
  },
  {
    id: 5,
    emoji: '🚀',
    title: 'Карьерные консультации',
    description: 'Помогу выстроить карьерный путь в IT и цифровизации: от специалиста до руководителя. Разбор резюме, стратегия роста, подготовка к переговорам о зарплате.',
    deliverable: 'Персональный план развития и конкретные шаги на ближайшие 6–12 месяцев',
    tag: 'Для IT-специалистов',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 border-b border-slate-200 pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Услуги
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Чем могу помочь вашему бизнесу
          </h2>
          <p className="max-w-xl text-base text-slate-500">
            17 лет практики в цифровизации — теперь в формате точечных консультаций и долгосрочного партнёрства.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-3xl">{service.emoji}</span>
                <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{service.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-500">{service.description}</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs font-medium text-blue-600">{service.deliverable}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}