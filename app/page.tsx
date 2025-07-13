"use client"

import { useState } from "react"
import { Brain, BookOpen, Award, RefreshCw, ExternalLink, CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface Question {
  id: number
  question: string
  type: "boolean" | "multiple"
  options?: string[]
  correct: number | boolean
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "O tubo neural se forma a partir da placa neural durante a 3ª semana de desenvolvimento embrionário.",
    type: "boolean",
    correct: true,
    explanation:
      "Correto! A neurulação ocorre durante a 3ª semana, quando a placa neural se dobra para formar o tubo neural, estrutura fundamental do sistema nervoso central.",
  },
  {
    id: 2,
    question: "Quantas vesículas encefálicas primárias se formam inicialmente?",
    type: "multiple",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation:
      "Correto! Formam-se 3 vesículas primárias: prosencéfalo (anterior), mesencéfalo (médio) e rombencéfalo (posterior).",
  },
  {
    id: 3,
    question: "A crista neural dá origem apenas aos neurônios do sistema nervoso periférico.",
    type: "boolean",
    correct: false,
    explanation:
      "Incorreto! A crista neural origina neurônios e células gliais do SNP, mas também melanócitos, células da medula adrenal, ossos e cartilagens craniofaciais.",
  },
  {
    id: 4,
    question: "Qual estrutura se desenvolve a partir do prosencéfalo?",
    type: "multiple",
    options: ["Cerebelo", "Ponte", "Cérebro", "Bulbo"],
    correct: 2,
    explanation:
      "Correto! O prosencéfalo se divide em telencéfalo (hemisférios cerebrais) e diencéfalo (tálamo, hipotálamo).",
  },
  {
    id: 5,
    question: "A mielinização do sistema nervoso central é realizada pelos oligodendrócitos.",
    type: "boolean",
    correct: true,
    explanation:
      "Correto! No SNC, os oligodendrócitos são responsáveis pela mielinização, enquanto no SNP são as células de Schwann.",
  },
  {
    id: 6,
    question: "Qual defeito do tubo neural resulta da falha no fechamento da porção cranial?",
    type: "multiple",
    options: ["Espinha bífida", "Anencefalia", "Encefalocele", "Holoprosencefalia"],
    correct: 1,
    explanation:
      "Correto! A anencefalia resulta da falha no fechamento do neuroporo anterior, levando à ausência de desenvolvimento do cérebro e calota craniana.",
  },
  {
    id: 7,
    question:
      "O ácido fólico é essencial para prevenir defeitos do tubo neural porque atua como cofator em reações de metilação do DNA.",
    type: "boolean",
    correct: true,
    explanation:
      "Correto! O ácido fólico participa do metabolismo de carbono único, essencial para síntese de DNA e metilação, processos cruciais durante a neurulação.",
  },
  {
    id: 8,
    question: "Em que semana gestacional ocorre o pico da neurogênese no córtex cerebral humano?",
    type: "multiple",
    options: ["8ª-12ª semana", "16ª-20ª semana", "24ª-28ª semana", "32ª-36ª semana"],
    correct: 1,
    explanation:
      "Correto! O pico da neurogênese cortical ocorre entre a 16ª e 20ª semana, quando há intensa proliferação de neurônios na zona ventricular.",
  },
  {
    id: 9,
    question: "A apoptose neural programada é um processo patológico que deve ser evitado durante o desenvolvimento.",
    type: "boolean",
    correct: false,
    explanation:
      "Incorreto! A apoptose é um processo fisiológico essencial que elimina cerca de 50% dos neurônios inicialmente formados, refinando as conexões neurais.",
  },
  {
    id: 10,
    question: "Qual fator de crescimento é crucial para a sobrevivência dos neurônios motores?",
    type: "multiple",
    options: ["BDNF", "NGF", "GDNF", "FGF"],
    correct: 2,
    explanation:
      "Correto! O GDNF (Glial cell line-Derived Neurotrophic Factor) é essencial para a sobrevivência e diferenciação dos neurônios motores.",
  },
  {
    id: 11,
    question: "A barreira hematoencefálica se desenvolve completamente apenas após o nascimento.",
    type: "boolean",
    correct: false,
    explanation:
      "Incorreto! A barreira hematoencefálica começa a se formar na 12ª semana gestacional e está funcionalmente ativa no final do 2º trimestre.",
  },
  {
    id: 12,
    question: "Qual é a principal função da zona ventricular durante o desenvolvimento neural?",
    type: "multiple",
    options: ["Mielinização", "Proliferação celular", "Formação de sinapses", "Apoptose"],
    correct: 1,
    explanation:
      "Correto! A zona ventricular é o local de intensa proliferação de células precursoras neurais através de divisões mitóticas.",
  },
  {
    id: 13,
    question: "Os neurônios corticais migram seguindo fibras radiais da glia até suas posições finais.",
    type: "boolean",
    correct: true,
    explanation:
      "Correto! A glia radial serve como 'trilhos' para guiar a migração neuronal da zona ventricular até o córtex, processo essencial para a laminação cortical.",
  },
  {
    id: 14,
    question: "Qual estrutura é responsável pela produção do líquido cefalorraquidiano durante o desenvolvimento?",
    type: "multiple",
    options: ["Plexo coroide", "Epêndima", "Pia-máter", "Aracnoide"],
    correct: 0,
    explanation:
      "Correto! O plexo coroide se desenvolve nos ventrículos cerebrais e é responsável pela produção da maior parte do LCR.",
  },
  {
    id: 15,
    question: "A sinaptogênese no córtex cerebral humano continua ativamente até os 2 anos de idade.",
    type: "boolean",
    correct: false,
    explanation:
      "Incorreto! A sinaptogênese é mais intensa nos primeiros meses, mas continua durante toda a infância e adolescência, com poda sináptica ocorrendo simultaneamente.",
  },
  {
    id: 16,
    question: "Qual gene é considerado o 'gene mestre' para o desenvolvimento do olho e sistema visual?",
    type: "multiple",
    options: ["HOX", "PAX6", "SHH", "WNT"],
    correct: 1,
    explanation:
      "Correto! O PAX6 é essencial para o desenvolvimento ocular e sua mutação causa aniridia e outras malformações oculares.",
  },
  {
    id: 17,
    question: "O cerebelo se desenvolve principalmente a partir do metencéfalo.",
    type: "boolean",
    correct: true,
    explanation:
      "Correto! O cerebelo se origina da porção dorsal do metencéfalo, com contribuições da placa alar do rombencéfalo.",
  },
  {
    id: 18,
    question: "Em que período gestacional ocorre o pico da mielinização no sistema nervoso central?",
    type: "multiple",
    options: ["2º trimestre", "3º trimestre", "Período perinatal", "Primeiros 2 anos pós-natal"],
    correct: 3,
    explanation:
      "Correto! Embora inicie no 3º trimestre, o pico da mielinização ocorre nos primeiros 2 anos após o nascimento, continuando até a adolescência.",
  },
  {
    id: 19,
    question: "A holoprosencefalia resulta da falha na divisão do prosencéfalo em hemisférios cerebrais.",
    type: "boolean",
    correct: true,
    explanation:
      "Correto! A holoprosencefalia é causada por defeitos na sinalização SHH (Sonic Hedgehog), resultando em falha na separação dos hemisférios cerebrais.",
  },
  {
    id: 20,
    question: "Qual é o principal neurotransmissor excitatório durante o desenvolvimento neural inicial?",
    type: "multiple",
    options: ["GABA", "Glutamato", "Acetilcolina", "Dopamina"],
    correct: 0,
    explanation:
      "Correto! Paradoxalmente, o GABA atua como neurotransmissor excitatório durante o desenvolvimento inicial devido aos altos níveis de cloreto intracelular nos neurônios imaturos.",
  },
]

export default function EmbriologiaSistemaNervoso() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | boolean | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))

  const handleAnswer = (answer: number | boolean) => {
    setSelectedAnswer(answer)
    setShowFeedback(true)

    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setQuizCompleted(false)
    setAnsweredQuestions(new Array(questions.length).fill(false))
  }

  const progressPercentage = ((currentQuestion + (showFeedback ? 1 : 0)) / questions.length) * 100

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#c55a3a" }}>
            {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Embriologia Simplificada - Desenvolvimento Neural
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Bem-vindos, futuros Engenheiros Biomédicos!
          </h2>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
            O desenvolvimento neural é um dos processos mais complexos e essenciais da embriologia humana. Durante as primeiras semanas de gestação, estruturas como o cérebro e a medula espinhal se formam por meio de processos precisos de diferenciação celular.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Etapas do Desenvolvimento */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-white mb-8">Etapas do Desenvolvimento Neural</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 group bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-orange-600 text-orange-600">
                    Semana 3
                  </Badge>
                  Neurulação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/images/neurulacao.png"
                  alt="Neurulação - Formação do tubo neural"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600">
                  A placa neural se dobra para formar o tubo neural, estrutura precursora do sistema nervoso central.
                </p>
                <Link href="/etapas/neurulacao">
                  <Button className="w-full group-hover:bg-orange-600 transition-colors bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explorar Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 group bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-orange-600 text-orange-600">
                    Semana 4
                  </Badge>
                  Vesículas Primárias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/images/vesiculas-primarias.png"
                  alt="Vesículas Primárias - Semana 4"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600">
                  Formação das três vesículas primárias: prosencéfalo, mesencéfalo e rombencéfalo.
                </p>
                <Link href="/etapas/vesiculas-primarias">
                  <Button className="w-full group-hover:bg-orange-600 transition-colors bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explorar Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 group bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-orange-600 text-orange-600">
                    Semana 5
                  </Badge>
                  Vesículas Secundárias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/images/vesiculas-secundarias.png"
                  alt="Vesículas Secundárias - Semana 5"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600">
                  Divisão em cinco vesículas: telencéfalo, diencéfalo, mesencéfalo, metencéfalo e mielencéfalo.
                </p>
                <Link href="/etapas/vesiculas-secundarias">
                  <Button className="w-full group-hover:bg-orange-600 transition-colors bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explorar Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 group bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-orange-600 text-orange-600">
                    Semana 6-8
                  </Badge>
                  Crista Neural
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/images/crista-neural.png"
                  alt="Crista Neural - Semana 6-8"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600">
                  Células da crista neural migram para formar o sistema nervoso periférico e outras estruturas.
                </p>
                <Link href="/etapas/crista-neural">
                  <Button className="w-full group-hover:bg-orange-600 transition-colors bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explorar Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 group bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-orange-600 text-orange-600">
                    2º Trimestre
                  </Badge>
                  Diferenciação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/images/diferenciacao.png"
                  alt="Diferenciação - 2º Trimestre"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600">
                  Diferenciação de neurônios e células gliais, formação de sinapses e mielinização.
                </p>
                <Link href="/etapas/diferenciacao">
                  <Button className="w-full group-hover:bg-orange-600 transition-colors bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explorar Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 group bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-orange-600 text-orange-600">
                    3º Trimestre
                  </Badge>
                  Maturação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/images/maturacao.png"
                  alt="Maturação - 3º Trimestre"
                  width={300}
                  height={200}
                  className="rounded-lg w-full"
                />
                <p className="text-sm text-gray-600">
                  Crescimento axonal, formação de circuitos neurais e refinamento das conexões sinápticas.
                </p>
                <Link href="/etapas/maturacao">
                  <Button className="w-full group-hover:bg-orange-600 transition-colors bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explorar Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quiz Interativo */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Quiz Interativo</h2>
            <p className="text-white/90">Teste seus conhecimentos sobre o desenvolvimento do sistema nervoso!</p>
          </div>

          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Questão {currentQuestion + 1} de {questions.length}
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetQuiz}
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reiniciar
                </Button>
              </div>
              <Progress value={progressPercentage} className="w-full" />
            </CardHeader>

            <CardContent className="space-y-6">
              {!quizCompleted ? (
                <>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>

                    <div className="space-y-2">
                      {questions[currentQuestion].type === "boolean" ? (
                        <div className="flex gap-4">
                          <Button
                            variant={selectedAnswer === true ? "default" : "outline"}
                            onClick={() => handleAnswer(true)}
                            disabled={showFeedback}
                            className={`flex-1 ${selectedAnswer === true ? "bg-orange-500 hover:bg-orange-600" : "border-orange-600 text-orange-600 hover:bg-orange-50"}`}
                          >
                            Verdadeiro
                          </Button>
                          <Button
                            variant={selectedAnswer === false ? "default" : "outline"}
                            onClick={() => handleAnswer(false)}
                            disabled={showFeedback}
                            className={`flex-1 ${selectedAnswer === false ? "bg-orange-500 hover:bg-orange-600" : "border-orange-600 text-orange-600 hover:bg-orange-50"}`}
                          >
                            Falso
                          </Button>
                        </div>
                      ) : (
                        <div className="grid gap-2">
                          {questions[currentQuestion].options?.map((option, index) => (
                            <Button
                              key={index}
                              variant={selectedAnswer === index ? "default" : "outline"}
                              onClick={() => handleAnswer(index)}
                              disabled={showFeedback}
                              className={`justify-start ${selectedAnswer === index ? "bg-orange-500 hover:bg-orange-600" : "border-orange-600 text-orange-600 hover:bg-orange-50"}`}
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {showFeedback && (
                    <div className="space-y-4 p-4 rounded-lg bg-orange-50 border border-orange-200">
                      <div className="flex items-center gap-2">
                        {selectedAnswer === questions[currentQuestion].correct ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                        <span className="font-medium">
                          {selectedAnswer === questions[currentQuestion].correct ? "Correto!" : "Incorreto!"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{questions[currentQuestion].explanation}</p>
                      <Button onClick={nextQuestion} className="w-full bg-orange-500 hover:bg-orange-600">
                        {currentQuestion < questions.length - 1 ? "Próxima Questão" : "Ver Resultado"}
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800">Quiz Concluído!</h3>
                    <p className="text-lg">
                      Você acertou <span className="font-bold text-orange-600">{score}</span> de{" "}
                      <span className="font-bold">{questions.length}</span> questões
                    </p>
                    <div className="text-sm text-gray-600">
                      {score === questions.length && "🎉 Perfeito! Você domina o assunto!"}
                      {score >= questions.length * 0.8 &&
                        score < questions.length &&
                        "👏 Muito bem! Excelente conhecimento!"}
                      {score >= questions.length * 0.6 &&
                        score < questions.length * 0.8 &&
                        "👍 Bom trabalho! Continue estudando!"}
                      {score < questions.length * 0.6 && "📚 Continue estudando para melhorar seus resultados!"}
                    </div>
                  </div>
                  <Button onClick={resetQuiz} size="lg" className="bg-orange-500 hover:bg-orange-600">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Tentar Novamente
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

{/* Recursos Adicionais */}
<section className="space-y-6">
  <h2 className="text-2xl font-bold text-center text-white">Recursos Adicionais</h2>

  <div className="flex justify-center">
    <Card className="w-full max-w-md hover:shadow-lg transition-shadow duration-300 bg-white/95 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-orange-600" />
          Livros Recomendados
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <p className="font-medium">Embriologia Básica - Moore, Keith L.</p>
          <p className="text-sm text-gray-600">Introdução essencial ao desenvolvimento humano</p>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Embriologia Clínica - Moore, Keith L.</p>
          <p className="text-sm text-gray-600">Foco clínico no desenvolvimento embrionário</p>
        </div>
      </CardContent>
    </Card>
  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="bg-white/95 backdrop-blur-sm border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-2">
            <p className="text-gray-600">Desenvolvido para estudantes de Engenharia Biomédica</p>
            <p className="text-sm text-gray-500">Projeto de Embriologia - Fins Educacionais</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
