import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold">Яндекс.Еда</div>
            <nav className="hidden md:flex gap-6">
              <a href="#benefits" className="hover:text-primary transition-colors">
                Преимущества
              </a>
              <a href="#how-to" className="hover:text-primary transition-colors">
                Как стать курьером?
              </a>
              <a href="#faq" className="hover:text-primary transition-colors">
                Частые вопросы
              </a>
            </nav>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
            Отправить заявку
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ищем курьера, который хочет зарабатывать до{" "}
                <span className="text-primary">850₽ в час</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Работайте в качестве самозанятого или курьера-партнёра сервиса Яндекс.Еда.
                <br />
                Зарабатывайте до 8 000₽ в день*
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
              >
                Стать курьером
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://cdn.poehali.dev/files/ac048a4f-0dd0-46c3-ba8e-9852b1b7b33c.png"
                alt="Курьер Яндекс.Еда"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему Яндекс Еда?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-8 bg-[hsl(var(--cyan-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-6">
                <div className="text-6xl">💰</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Стабильный ежедневный доход</h3>
                  <p className="text-lg">
                    Зарабатывайте до 850 руб. в час, в месяц до 120 тыс.
                    Больше доставок, больше доход.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-[hsl(var(--pink-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-6">
                <div className="text-6xl">⚙️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Подработка</h3>
                  <p className="text-lg">
                    Совмещайте с основной работой, или учёбой, берите дополнительные заказы в свободное время.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-[hsl(var(--green-card))] border-0 mb-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-6">
              <div className="text-6xl">📅</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Полностью свободный график</h3>
                <p className="text-lg">
                  Выходите на смену, когда удобно вам. Работайте от 1 часа, до 12 часов, вы сами выбираете сколько часов работать.
                  Любой район на выбор, можно работать в своём районе.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-[hsl(var(--peach-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3">Скидки для курьеров</h3>
              <p className="text-base">
                При заказе еды в ресторанах-партнерах и Яндекс.Лавке предоставляется скидка до 50%
              </p>
            </Card>

            <Card className="p-8 bg-[hsl(var(--pink-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🚲</div>
              <h3 className="text-xl font-bold mb-3">Доставка на чем угодно</h3>
              <p className="text-base">
                Доставляйте заказы пешком, на велосипеде, самокате или собственном автомобиле.
              </p>
            </Card>

            <Card className="p-8 bg-[hsl(var(--cyan-card))] border-0 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">💵</div>
              <h3 className="text-xl font-bold mb-3">Высокий доход и чаевые</h3>
              <p className="text-base">
                Получайте доплаты за заказы. Чаевые за заказы полностью ваши.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
            >
              Стать курьером
            </Button>
          </div>
        </div>
      </section>

      <section id="how-to" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Как стать курьером?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img
                  src="https://cdn.poehali.dev/files/aee5ca3d-7879-4e84-8b20-f92005dc0041.png"
                  alt="Оставьте заявку"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">Оставьте заявку</h3>
              <p className="text-lg text-muted-foreground">
                Нажмите на кнопку "стать курьером", или "оставить заявку"
              </p>
            </div>

            <div className="text-center space-y-4 md:mt-12">
              <Icon name="ArrowRight" className="mx-auto text-primary hidden md:block" size={32} />
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="text-8xl">📱</div>
              </div>
              <h3 className="text-2xl font-bold">Дождитесь звонка</h3>
              <p className="text-lg text-muted-foreground">
                Мы с вами свяжемся, и расскажем что нужно для оформления
              </p>
            </div>

            <div className="text-center space-y-4 md:mt-24">
              <Icon name="ArrowRight" className="mx-auto text-primary hidden md:block" size={32} />
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="text-8xl">🛵</div>
              </div>
              <h3 className="text-2xl font-bold">Выходите на смену</h3>
              <p className="text-lg text-muted-foreground">
                Для этого нужно будет установить приложение и получить сумку. в офисе мы ответим на все ваши вопросы.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
            >
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Часто задаваемые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Можно ли стать курьером, если мне нет 18 лет?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Стать курьером-партнером Яндекс Еды можно, если вам есть 18 лет.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Можно ли доставлять заказы на велосипеде, самокате или только пешком?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Вы можете выполнять заказы не только пешком. Если вы хорошо управляетесь с велосипедом, самокатом, роликами и другими средствами передвижения — используйте их. Так выполнять доставки можно быстрее, а значит, и доход будет выше. Главное, будьте аккуратны и помните о правилах дорожного движения. На покупку и ремонт велосипедов и самокатов можно будет получить скидки до 50% у партнёров.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Можно ли выполнять заказы по выходным?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Да, вы сами выбираете когда выполнять заказы и район доставки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Сколько заказов выполняет курьер за час?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                2-4 Заказа, иногда бывают "мультизаказы"
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                У меня есть основная работа, могу ли я выполнять заказы в свободное время?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Да, обычно курьеры могут совмещать основную работу с подработкой у партнёра сервиса Яндекс Еда.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg border px-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Оплачивается ли курьером проезд на общественном транспорте?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Обычно определённая сумма на проезд входит в фиксированную сумму дохода.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Готовы начать зарабатывать?
            </h2>
            <p className="text-xl text-black/80">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Имя
                </label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-base"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Телефон
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Сообщение (необязательно)
                </label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о себе..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="text-base"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-black hover:bg-black/90 text-white font-semibold text-lg py-6"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">Яндекс.Еда</div>
          <p className="text-gray-400">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
