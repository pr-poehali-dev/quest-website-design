import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container max-w-4xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-white">🎮 КВЕСТ</h1>
          <p className="text-xl text-gray-300 mb-8">
            Добро пожаловать в увлекательный квест! Готов принять вызов?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="Target" size={24} />
                Твоя миссия
              </CardTitle>
              <CardDescription className="text-gray-300">
                Пройди 4 увлекательных задания и достигни финиша
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>
                Каждое задание - это загадка, которую нужно разгадать. Будь
                внимателен к деталям!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="Clock" size={24} />
                Правила
              </CardTitle>
              <CardDescription className="text-gray-300">
                Никаких временных ограничений - думай спокойно
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>
                Используй все доступные подсказки и не сдавайся. Победа будет
                твоей!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/quest">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-xl px-8 py-4"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать квест
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
