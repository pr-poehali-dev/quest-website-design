import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Result = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container max-w-4xl mx-auto p-6">
        <div className="text-center">
          <Card className="bg-gray-900 border-gray-700 mb-8">
            <CardContent className="p-12">
              <div className="mb-8">
                <h1 className="text-6xl font-bold mb-6 text-white">
                  🎉 Поздравляю!
                </h1>
                <h2 className="text-4xl font-bold mb-8 text-green-400">
                  КВЕСТ ПРОЙДЕН!
                </h2>
              </div>

              <div className="mb-8">
                <img
                  src="/img/584abe8c-a89c-4053-aa97-a98c149c7db5.jpg"
                  alt="Поздравление с прохождением квеста"
                  className="max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="text-lg text-gray-300 mb-8">
                <p>Ты успешно прошел все 4 задания!</p>
                <p>Поздравляем с победой! 🏆</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quest">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200"
                  >
                    <Icon name="RotateCcw" size={20} className="mr-2" />
                    Пройти еще раз
                  </Button>
                </Link>

                <Link to="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800"
                  >
                    <Icon name="Home" size={20} className="mr-2" />
                    На главную
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Result;
