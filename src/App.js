import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';

const movies = [
  { "id": 1, "title": "Інцепція", "poster": "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1", "genre": "Наукова фантастика", "showtime": "18:00", "description": "Фільм про злом думок" },
  { "id": 2, "title": "Темний лицар", "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1", "genre": "Екшн", "showtime": "20:00", "description": "Шедевр про Бетмена" },
  { "id": 3, "title": "Паразити", "poster": "https://images.unsplash.com/photo-1596163293416-62ea7cf4a8b7", "genre": "Драма", "showtime": "22:00", "description": "Корейський трилер із соціальним змістом" },
  { "id": 4, "title": "Шрек", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "16:00", "description": "Смішна пригода огрів" },
  { "id": 5, "title": "Матриця", "poster": "https://images.unsplash.com/photo-1531104871497-73a56302e7b6", "genre": "Наукова фантастика", "showtime": "19:00", "description": "Культовий фільм про віртуальну реальність" },
  { "id": 6, "title": "Втеча з Шоушенка", "poster": "https://images.unsplash.com/photo-1527219525722-6b23229d38e6", "genre": "Драма", "showtime": "21:00", "description": "Історія про надію та свободу" },
  { "id": 7, "title": "Король Лев", "poster": "https://images.unsplash.com/photo-1546443045-0a96e3e389ef", "genre": "Анімація", "showtime": "14:00", "description": "Класична історія про Сімбу" },
  { "id": 8, "title": "Зоряні війни: Епізод IV", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Фантастика", "showtime": "17:00", "description": "Епічна космічна сага" },
  { "id": 9, "title": "Форрест Ґамп", "poster": "https://images.unsplash.com/photo-1518676590629-3dcbd9c86a5c", "genre": "Драма", "showtime": "15:00", "description": "Життя – як коробка цукерок" },
  { "id": 10, "title": "Месники: Завершення", "poster": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6", "genre": "Екшн", "showtime": "20:30", "description": "Фінальна битва супергероїв" },
  { "id": 11, "title": "Коко", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "13:00", "description": "Подорож у світ мертвих" },
  { "id": 12, "title": "Гладіатор", "poster": "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9", "genre": "Екшн", "showtime": "19:30", "description": "Епічна історія помсти" },
  { "id": 13, "title": "Ла-Ла Ленд", "poster": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b", "genre": "Мюзикл", "showtime": "18:30", "description": "Романтична історія про мрії" },
  { "id": 14, "title": "Титанік", "poster": "https://images.unsplash.com/photo-1519125323398-675f351870d2", "genre": "Драма", "showtime": "21:30", "description": "Легендарна історія кохання" },
  { "id": 15, "title": "Джокер", "poster": "https://images.unsplash.com/photo-1531251445707-2f7f14544d5b", "genre": "Трилер", "showtime": "22:30", "description": "Темна історія становлення лиходія" },
  { "id": 16, "title": "Крижане серце", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "15:30", "description": "Пригоди Анни та Ельзи" },
  { "id": 17, "title": "Бійцівський клуб", "poster": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70", "genre": "Трилер", "showtime": "23:00", "description": "Фільм про хаос і саморуйнування" },
  { "id": 18, "title": "Володар перснів: Братство персня", "poster": "https://images.unsplash.com/photo-1516627145497-ae6968895b74", "genre": "Фентезі", "showtime": "17:30", "description": "Початок епічної подорожі" },
  { "id": 19, "title": "Зелена миля", "poster": "https://images.unsplash.com/photo-1543865766-2a1e252a7186", "genre": "Драма", "showtime": "20:00", "description": "Зворушлива історія про диво" },
  { "id": 20, "title": "Аватар", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Фантастика", "showtime": "19:00", "description": "Подорож на Пандору" },
  { "id": 21, "title": "Моана", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "14:30", "description": "Пригоди на морі" },
  { "id": 22, "title": "Гаррі Поттер і філософський камінь", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Фентезі", "showtime": "16:30", "description": "Перша подорож у Гоґвортс" },
  { "id": 23, "title": "Список Шиндлера", "poster": "https://images.unsplash.com/photo-1543865766-2a1e252a7186", "genre": "Драма", "showtime": "21:00", "description": "Історія порятунку під час війни" },
  { "id": 24, "title": "Пірати Карибського моря", "poster": "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9", "genre": "Пригоди", "showtime": "18:00", "description": "Пригоди Джека Горобця" },
  { "id": 25, "title": "Дюна", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Фантастика", "showtime": "19:30", "description": "Епічна історія на пустельній планеті" },
  { "id": 26, "title": "Красуня і чудовисько", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "15:00", "description": "Казка про справжнє кохання" },
  { "id": 27, "title": "Мовчання ягнят", "poster": "https://images.unsplash.com/photo-1531251445707-2f7f14544d5b", "genre": "Трилер", "showtime": "22:00", "description": "Напружений трилер із Ганнібалом Лектером" },
  { "id": 28, "title": "Вверх", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "13:30", "description": "Зворушлива подорож на повітряній кулі" },
  { "id": 29, "title": "Інтерстеллар", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Фантастика", "showtime": "20:30", "description": "Подорож за межі галактики" },
  { "id": 30, "title": "Соціальна мережа", "poster": "https://images.unsplash.com/photo-1518676590629-3dcbd9c86a5c", "genre": "Драма", "showtime": "18:30", "description": "Історія створення Facebook" },
  { "id": 31, "title": "Зоотрополіс", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "14:00", "description": "Пригоди у світі тварин" },
  { "id": 32, "title": "Той, що біжить по лезу 2049", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Фантастика", "showtime": "21:30", "description": "Футуристичний трилер" },
  { "id": 33, "title": "Мадагаскар", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "15:30", "description": "Пригоди звірів на острові" },
  { "id": 34, "title": "Сім", "poster": "https://images.unsplash.com/photo-1531251445707-2f7f14544d5b", "genre": "Трилер", "showtime": "22:30", "description": "Напружений детектив" },
  { "id": 35, "title": "Хоббіт: Несподівана подорож", "poster": "https://images.unsplash.com/photo-1516627145497-ae6968895b74", "genre": "Фентезі", "showtime": "17:00", "description": "Пригоди Більбо" },
  { "id": 36, "title": "Одного разу в Голлівуді", "poster": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b", "genre": "Драма", "showtime": "19:00", "description": "Історія 60-х від Тарантіно" },
  { "id": 37, "title": "Рататуй", "poster": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "genre": "Анімація", "showtime": "16:00", "description": "Щур, який став шеф-кухарем" }
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies} />} />
      <Route path="/booking/:id" element={<Booking movies={movies} />} />
    </Routes>
  );
}

export default App;