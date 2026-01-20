import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

declare global {
  interface Window {
    VK: any;
  }
}

export default function Index() {
  const [selectedEra, setSelectedEra] = useState('all');

  useEffect(() => {
    if (window.VK) {
      window.VK.Widgets.Group("vk_widget", {mode: 4, width: "auto", height: "400", color1: 'FFF8DC', color2: '3E2723', color3: '8B4513'}, 85650756);
    }
  }, []);

  const collections = [
    { id: 1, title: 'Война и мир', author: 'Л.Н. Толстой', year: '1869', era: '19th', price: '12 500 ₽', condition: 'Отличное', image: '📚' },
    { id: 2, title: 'Мастер и Маргарита', author: 'М.А. Булгаков', year: '1966', era: 'soviet', price: '8 900 ₽', condition: 'Хорошее', image: '📖' },
    { id: 3, title: 'Евгений Онегин', author: 'А.С. Пушкин', year: '1833', era: '19th', price: '15 000 ₽', condition: 'Редкое', image: '📕' },
    { id: 4, title: 'Тихий Дон', author: 'М.А. Шолохов', year: '1940', era: 'soviet', price: '7 200 ₽', condition: 'Хорошее', image: '📗' },
    { id: 5, title: 'Анна Каренина', author: 'Л.Н. Толстой', year: '1877', era: '19th', price: '11 300 ₽', condition: 'Отличное', image: '📘' },
    { id: 6, title: 'Собачье сердце', author: 'М.А. Булгаков', year: '1925', era: 'rare', price: '22 000 ₽', condition: 'Раритет', image: '📙' },
  ];

  const reviews = [
    { id: 1, name: 'Анна Петрова', text: 'Нашла редкое издание Толстого! Качество потрясающее, спасибо за бережное хранение литературного наследия.', rating: 5 },
    { id: 2, name: 'Дмитрий Соколов', text: 'Отличный магазин для ценителей старинных книг. Консультация на высшем уровне.', rating: 5 },
    { id: 3, name: 'Елена Морозова', text: 'Приобрела несколько книг советского периода. Состояние превосходное, цены адекватные.', rating: 5 },
  ];

  const filteredBooks = selectedEra === 'all' 
    ? collections 
    : collections.filter(book => book.era === selectedEra);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] via-[#FFF8DC] to-[#F5E6D3] vintage-texture">
      {/* Header */}
      <header className="border-b-2 border-[#8B4513]/20 bg-[#FFF8DC]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-5xl">📚</span>
              <div>
                <h1 className="text-3xl font-bold text-[#3E2723]">Магазин Старой Книги</h1>
                <p className="text-sm text-[#8B4513]">Букинистический магазин</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#about" className="text-[#3E2723] hover:text-[#8B4513] transition-colors font-medium">О нас</a>
              <a href="#collections" className="text-[#3E2723] hover:text-[#8B4513] transition-colors font-medium">Коллекции</a>
              <a href="#reviews" className="text-[#3E2723] hover:text-[#8B4513] transition-colors font-medium">Отзывы</a>
              <a href="#contacts" className="text-[#3E2723] hover:text-[#8B4513] transition-colors font-medium">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold text-[#3E2723] mb-6 leading-tight">
              Сокровищница<br />старых книг
            </h2>
            <p className="text-xl text-[#8B4513] mb-8 max-w-2xl mx-auto leading-relaxed">
              Откройте для себя мир букинистики. Каждая книга бережно сохранена для Вас.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#8B4513] hover:bg-[#3E2723] text-[#FFF8DC] px-8 py-6 text-lg">
                <Icon name="Search" className="mr-2" />
                Каталог книг
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-[#FFF8DC] px-8 py-6 text-lg"
                onClick={() => window.open('https://vk.com/old_frend_book', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" />
                Группа ВКонтакте
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[#FFF8DC]/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-[#3E2723]">О магазине</h2>
              <div className="space-y-4 text-[#3E2723]/80 text-lg leading-relaxed">
                <p>
                  «Магазин Старой Книги» — это семейный букинистический магазин с более чем 30-летней историей. 
                  Мы специализируемся на редких изданиях русской классики, советской литературы и антикварных книгах.
                </p>
                <p>
                  Каждая книга в нашей коллекции проходит тщательный отбор и экспертизу. Мы гарантируем подлинность, 
                  качество и бережное хранение каждого экземпляра.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#8B4513]">30+</div>
                    <div className="text-sm text-[#3E2723]/60">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#8B4513]">5000+</div>
                    <div className="text-sm text-[#3E2723]/60">книг в каталоге</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#8B4513]">1200+</div>
                    <div className="text-sm text-[#3E2723]/60">довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-[200px] leading-none opacity-10 select-none">📚</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-[#3E2723] text-center mb-4">Наши коллекции</h2>
          <p className="text-center text-[#8B4513] mb-12 text-lg">
            Найдите редкую книгу по эпохе и жанру
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B4513]" />
              <Input 
                placeholder="Поиск по названию, автору..." 
                className="pl-10 py-6 text-lg border-2 border-[#8B4513]/30 focus:border-[#8B4513]"
              />
            </div>
          </div>

          {/* Era Filter */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedEra}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 bg-[#F5E6D3] p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#FFF8DC]">Все</TabsTrigger>
              <TabsTrigger value="19th" className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#FFF8DC]">XIX век</TabsTrigger>
              <TabsTrigger value="soviet" className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#FFF8DC]">Советская</TabsTrigger>
              <TabsTrigger value="rare" className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#FFF8DC]">Редкости</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Card key={book.id} className="book-shadow bg-[#FFF8DC] border-2 border-[#8B4513]/20 page-flip hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{book.image}</div>
                  <CardTitle className="text-2xl text-[#3E2723]">{book.title}</CardTitle>
                  <CardDescription className="text-[#8B4513] text-base">{book.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#3E2723]/60">Год издания:</span>
                      <Badge variant="outline" className="border-[#8B4513] text-[#8B4513]">{book.year}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#3E2723]/60">Состояние:</span>
                      <span className="font-medium text-[#3E2723]">{book.condition}</span>
                    </div>
                    <div className="pt-4 border-t border-[#8B4513]/20">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-2xl font-bold text-[#8B4513]">{book.price}</span>
                      </div>
                      <Button className="w-full bg-[#8B4513] hover:bg-[#3E2723] text-[#FFF8DC]">
                        <Icon name="ShoppingCart" className="mr-2" size={18} />
                        Заказать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-[#FFF8DC]/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-[#3E2723] text-center mb-4">Отзывы читателей</h2>
          <p className="text-center text-[#8B4513] mb-12 text-lg">
            Что говорят наши клиенты
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="book-shadow bg-[#FFF8DC] border-2 border-[#8B4513]/20">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-[#8B4513] text-[#8B4513]" />
                    ))}
                  </div>
                  <CardTitle className="text-xl text-[#3E2723]">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#3E2723]/80 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-[#3E2723] text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="book-shadow bg-[#FFF8DC] border-2 border-[#8B4513]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-[#3E2723]">Как с нами связаться</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-[#8B4513] mt-1" size={24} />
                  <div>
                    <div className="font-medium text-[#3E2723] mb-1">Адрес магазина</div>
                    <div className="text-[#3E2723]/70">г. Москва, ул. Арбат, д. 25</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-[#8B4513] mt-1" size={24} />
                  <div>
                    <div className="font-medium text-[#3E2723] mb-1">Режим работы</div>
                    <div className="text-[#3E2723]/70">Пн-Сб: 10:00 — 20:00<br/>Вс: 11:00 — 18:00</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-[#8B4513] mt-1" size={24} />
                  <div>
                    <div className="font-medium text-[#3E2723] mb-1">Телефон</div>
                    <div className="text-[#3E2723]/70">+7 (495) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-[#8B4513] mt-1" size={24} />
                  <div>
                    <div className="font-medium text-[#3E2723] mb-1">Email</div>
                    <div className="text-[#3E2723]/70">info@staraya-biblioteka.ru</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    className="w-full bg-[#0077FF] hover:bg-[#0066DD] text-white text-lg py-6"
                    onClick={() => window.open('https://vk.com/old_frend_book', '_blank')}
                  >
                    <Icon name="MessageCircle" className="mr-2" size={24} />
                    Наша группа ВКонтакте
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="book-shadow bg-[#FFF8DC] border-2 border-[#8B4513]/20 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-[#3E2723]">Наши новости в VK</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div id="vk_widget" className="min-h-[400px]"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E2723] text-[#F5E6D3] py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">📚</span>
            <span className="text-2xl font-bold">Магазин Старой Книги</span>
          </div>
          <p className="text-[#F5E6D3]/70 mb-4">
            Букинистический магазин редких и антикварных книг
          </p>
          <div className="flex justify-center gap-6 text-sm text-[#F5E6D3]/60">
            <span>© 2024 Все права защищены</span>
            <span>•</span>
            <span>ИП Иванов А.С.</span>
            <span>•</span>
            <span>ОГРНИП 123456789012345</span>
          </div>
        </div>
      </footer>
    </div>
  );
}