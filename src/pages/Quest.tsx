import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Quest = () => {
  const [answers, setAnswers] = useState({
    task1: "",
    task2: "",
    task3: "",
    task4: "",
  });

  const [completed, setCompleted] = useState({
    task1: false,
    task2: false,
    task3: false,
    task4: false,
  });

  const tasks = [
    {
      id: "task1",
      title: "Задание 1",
      description: "KONASEI",
      placeholder: "Введи ответ...",
    },
    {
      id: "task2",
      title: "Задание 2",
      description:
        "СОБЕРИ ВСЕ СООБЩЕНИЕ ОТ hamstercombat2027 И СОСТАВЬ ПРЕДЛОЖЕНИЕ!",
      placeholder: "Составь предложение...",
    },
    {
      id: "task3",
      title: "Задание 3",
      description: "СОЕДИНИ ВСЕ ПЕРВЫЕ СЛОВА OLIVЬE В КАЖДОМ ВИДЕО",
      placeholder: "Соедини слова...",
    },
    {
      id: "task4",
      title: "Задание 4",
      description: "ДОБЕРИСЬ ДО ПУСТОТЫ",
      placeholder: "Найди пустоту...",
    },
  ];

  const handleAnswerChange = (taskId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [taskId]: value,
    }));
  };

  const handleSubmit = (taskId: string) => {
    if (answers[taskId as keyof typeof answers].trim()) {
      setCompleted((prev) => ({
        ...prev,
        [taskId]: true,
      }));
    }
  };

  const allCompleted = Object.values(completed).every(Boolean);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">
            🎯 ЗАДАНИЯ КВЕСТА
          </h1>
          <p className="text-lg text-gray-300">
            Выполни все 4 задания, чтобы пройти квест
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {tasks.map((task, index) => (
            <Card key={task.id} className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  {completed[task.id as keyof typeof completed] ? (
                    <Icon
                      name="CheckCircle"
                      size={24}
                      className="text-green-400"
                    />
                  ) : (
                    <Icon name="Circle" size={24} className="text-gray-400" />
                  )}
                  {task.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg font-medium">
                  {task.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor={task.id} className="text-white">
                    Твой ответ:
                  </Label>
                  <Input
                    id={task.id}
                    placeholder={task.placeholder}
                    value={answers[task.id as keyof typeof answers]}
                    onChange={(e) =>
                      handleAnswerChange(task.id, e.target.value)
                    }
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    disabled={completed[task.id as keyof typeof completed]}
                  />
                </div>
                <Button
                  onClick={() => handleSubmit(task.id)}
                  disabled={
                    !answers[task.id as keyof typeof answers].trim() ||
                    completed[task.id as keyof typeof completed]
                  }
                  className="bg-white text-black hover:bg-gray-200 disabled:bg-gray-600 disabled:text-gray-400"
                >
                  {completed[task.id as keyof typeof completed] ? (
                    <>
                      <Icon name="Check" size={16} className="mr-2" />
                      Выполнено
                    </>
                  ) : (
                    "Отправить ответ"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          {allCompleted ? (
            <Link to="/result">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white text-xl px-8 py-4"
              >
                <Icon name="Trophy" size={20} className="mr-2" />
                Получить награду!
              </Button>
            </Link>
          ) : (
            <div className="text-gray-400">
              <p className="mb-4">
                Выполни все задания, чтобы перейти к финалу
              </p>
              <div className="flex justify-center gap-2">
                {Object.values(completed).map((isCompleted, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full ${
                      isCompleted ? "bg-green-400" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link to="/">
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад на главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quest;
