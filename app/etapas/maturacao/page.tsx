"use client"

import { ArrowLeft, Dna, Brain, Microscope, BookOpen, Home, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function MaturacaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                3º Trimestre
              </Badge>
              <h1 className="text-2xl font-bold text-gray-900">Maturação Neural</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Visão Geral */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Refinamento e Maturação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Durante o terceiro trimestre e os primeiros anos pós-natais, o sistema nervoso passa por processos
                    intensos de maturação, incluindo mielinização, poda sináptica e refinamento das conexões neurais.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">Processos Principais:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Mielinização:</strong> Isolamento dos axônios
                      </li>
                      <li>
                        • <strong>Poda sináptica:</strong> Eliminação de conexões desnecessárias
                      </li>
                      <li>
                        • <strong>Apoptose:</strong> Morte celular programada
                      </li>
                      <li>
                        • <strong>Plasticidade:</strong> Adaptação baseada na experiência
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mielinização */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                Mielinização
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Cronologia da Mielinização</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>3º trimestre:</strong> Início na medula espinhal e tronco cerebral
                    </p>
                    <p>
                      <strong>Nascimento:</strong> Nervos cranianos e tratos motores
                    </p>
                    <p>
                      <strong>6 meses:</strong> Tratos sensoriais primários
                    </p>
                    <p>
                      <strong>2 anos:</strong> Córtex associativo
                    </p>
                    <p>
                      <strong>Adolescência:</strong> Córtex pré-frontal (finalização)
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Padrão Caudal → Rostral</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Medula espinhal:</strong> Primeira a ser mielinizada
                    </p>
                    <p>
                      <strong>Tronco cerebral:</strong> Funções vitais
                    </p>
                    <p>
                      <strong>Cerebelo:</strong> Coordenação motora
                    </p>
                    <p>
                      <strong>Córtex:</strong> Funções superiores (último)
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Células Mielinizantes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-blue-700 text-lg">Sistema Nervoso Central</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Oligodendrócitos:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Um oligodendrócito mieliniza múltiplos axônios</li>
                          <li>• Produção de proteínas da mielina (MBP, PLP)</li>
                          <li>• Regulação por fatores tróficos</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-700 text-lg">Sistema Nervoso Periférico</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Células de Schwann:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Uma célula por segmento de axônio</li>
                          <li>• Capacidade regenerativa superior</li>
                          <li>• Produção de fatores neurotróficos</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Importância Funcional</h4>
                <p className="text-sm text-purple-700">
                  A mielinização aumenta a velocidade de condução neural de 1-2 m/s para até 120 m/s, permitindo o
                  processamento rápido de informações necessário para funções cognitivas complexas.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Poda Sináptica */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-green-600" />
                Poda Sináptica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Mecanismo de Poda</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Superprodução inicial:</strong> Formação excessiva de sinapses
                    </p>
                    <p>
                      <strong>Competição:</strong> Sinapses competem por fatores tróficos
                    </p>
                    <p>
                      <strong>Atividade-dependente:</strong> "Use it or lose it"
                    </p>
                    <p>
                      <strong>Eliminação:</strong> Remoção de conexões não utilizadas
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Papel da Microglia:</h4>
                    <p className="text-sm text-gray-600">
                      A microglia fagocita sinapses marcadas para eliminação, processo mediado pelo sistema complemento
                      (C1q, C3).
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Cronologia Regional</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Córtex sensorial:</strong> Primeira infância
                    </p>
                    <p>
                      <strong>Córtex motor:</strong> Infância média
                    </p>
                    <p>
                      <strong>Córtex associativo:</strong> Adolescência
                    </p>
                    <p>
                      <strong>Córtex pré-frontal:</strong> Início da idade adulta
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Períodos Críticos</h4>
                    <p className="text-sm text-green-700">
                      A poda sináptica define períodos críticos para aprendizado, quando a experiência tem maior impacto
                      no desenvolvimento neural.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Apoptose Neural */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dna className="h-5 w-5 text-red-600" />
                Apoptose Neural
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Morte Celular Programada</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Magnitude:</strong> ~50% dos neurônios inicialmente formados
                    </p>
                    <p>
                      <strong>Função:</strong> Refinamento quantitativo das populações neurais
                    </p>
                    <p>
                      <strong>Regulação:</strong> Fatores neurotróficos e atividade neural
                    </p>
                    <p>
                      <strong>Mecanismo:</strong> Cascata de caspases
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Fatores Neurotróficos</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">NGF</Badge>
                      <span className="text-sm text-gray-600">Neurônios sensoriais e simpáticos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">BDNF</Badge>
                      <span className="text-sm text-gray-600">Neurônios corticais e hipocampais</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">GDNF</Badge>
                      <span className="text-sm text-gray-600">Neurônios motores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">NT-3</Badge>
                      <span className="text-sm text-gray-600">Proprioceptores</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Plasticidade Neural */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Plasticidade Neural
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Tipos de Plasticidade</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Plasticidade Estrutural</h4>
                      <p className="text-sm text-gray-600">
                        Mudanças na morfologia dendrítica, formação/eliminação de espinhas, crescimento axonal.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Plasticidade Funcional</h4>
                      <p className="text-sm text-gray-600">
                        Alterações na força sináptica, LTP/LTD, modulação da excitabilidade neuronal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Mecanismos Moleculares</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>CREB:</strong> Fator de transcrição para plasticidade
                    </p>
                    <p>
                      <strong>Arc/Arg3.1:</strong> Proteína de resposta imediata
                    </p>
                    <p>
                      <strong>AMPA/NMDA:</strong> Receptores glutamatérgicos
                    </p>
                    <p>
                      <strong>CaMKII:</strong> Quinase dependente de cálcio
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Importância Clínica</h4>
                <p className="text-sm text-blue-700">
                  A compreensão da plasticidade neural é fundamental para estratégias de reabilitação neurológica,
                  tratamento de distúrbios do desenvolvimento e otimização do aprendizado.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação Final */}
        <section className="flex justify-between items-center pt-8">
          <Link href="/etapas/diferenciacao">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Etapa Anterior: Diferenciação
            </Button>
          </Link>
          <Link href="/">
            <Button>
              Página Principal
              <Home className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
