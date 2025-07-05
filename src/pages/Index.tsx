import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("main");
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === "3112") {
      setCurrentPage("final");
    } else {
      setShowPasswordError(true);
      setTimeout(() => setShowPasswordError(false), 3000);
    }
  };

  // Главная страница
  if (currentPage === "main") {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider">
              Поздравляю!
            </h1>
            <div className="text-4xl md:text-6xl font-bold tracking-wide">
              КВЕСТ ПРОЙДЕН!
            </div>
          </div>

          <div className="space-y-8">
            <Button
              onClick={() => setCurrentPage("additional")}
              className="bg-white text-black hover:bg-gray-200 text-xl px-8 py-4 tracking-wide transition-all duration-300"
            >
              ДОПОЛНЕНИЯ
            </Button>

            <div className="space-y-4">
              <div className="text-sm text-gray-400">
                Введите пароль для доступа к секретной области:
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Пароль"
                  className="bg-black border-white text-white placeholder-gray-400 max-w-xs text-center"
                  onKeyPress={(e) =>
                    e.key === "Enter" && handlePasswordSubmit()
                  }
                />
                <Button
                  onClick={handlePasswordSubmit}
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Войти
                </Button>
                {showPasswordError && (
                  <div className="text-red-400 text-sm animate-fade-in">
                    Неверный пароль
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Страница дополнительных заданий
  if (currentPage === "additional") {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-wider">
            ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ
          </h1>

          <div className="space-y-6 max-w-2xl">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Puzzle" className="text-white" size={32} />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">
                      Задание 1
                    </h3>
                    <p className="text-gray-300">KONASEI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Key" className="text-white" size={32} />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">
                      Задание 2
                    </h3>
                    <p className="text-gray-300">
                      СОБЕРИ ВСЕ СООБЩЕНИЕ ОТ hamstercombat2027 И СОСТАВЬ
                      ПРЕДЛОЖЕНИЕ!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Trophy" className="text-white" size={32} />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">
                      Задание 3
                    </h3>
                    <p className="text-gray-300">
                      СОЕДИНИ ВСЕ ПЕРВЫЕ СЛОВА OLIVЬE В КАЖДОМ ВИДЕО
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Search" className="text-white" size={32} />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white">
                      Задание 4
                    </h3>
                    <p className="text-gray-300">ДОБЕРИСЬ ДО ПУСТОТЫ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button
            onClick={() => setCurrentPage("main")}
            className="bg-white text-black hover:bg-gray-200 px-6 py-3"
          >
            Назад к главной
          </Button>
        </div>
      </div>
    );
  }

  // Финальная страница
  if (currentPage === "final") {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider">
            govnoman
          </h1>

          <div className="max-w-2xl">
            <img
              src="https://cdn.poehali.dev/files/ebaefa27-7313-4ace-abe9-80ec81bc20d8.png"
              alt="Финальное изображение"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          <Button
            onClick={() => {
              setCurrentPage("main");
              setPassword("");
            }}
            className="bg-white text-black hover:bg-gray-200 px-6 py-3"
          >
            Начать заново
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Index;
