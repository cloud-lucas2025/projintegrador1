"use client"

import { ArrowLeft, Dna, Brain, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VesiculasSecundariasPage() {
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
                Semana 5
              </Badge>
              <h1 className="text-2xl font-bold text-gray-900">Vesículas Encefálicas Secundárias</h1>
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
                Divisão em Cinco Vesículas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Na quinta semana de desenvolvimento, as três vesículas primárias se subdividem, formando cinco
                    vesículas encefálicas secundárias. Esta divisão representa um refinamento adicional na
                    regionalização do encéfalo em desenvolvimento.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">Transformação 3 → 5:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-blue-600">
                          Prosencéfalo
                        </Badge>
                        <span>→</span>
                        <Badge variant="secondary">Telencéfalo</Badge>
                        <span>+</span>
                        <Badge variant="secondary">Diencéfalo</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-green-600">
                          Mesencéfalo
                        </Badge>
                        <span>→</span>
                        <Badge variant="secondary">Mesencéfalo</Badge>
                        <span className="text-gray-500">(sem divisão)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-purple-600">
                          Rombencéfalo
                        </Badge>
                        <span>→</span>
                        <Badge variant="secondary">Metencéfalo</Badge>
                        <span>+</span>
                        <Badge variant="secondary">Mielencéfalo</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detalhes das Vesículas Secundárias */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gray-800">Vesículas Secundárias Detalhadas</h2>

          <div className="space-y-6">
            {/* Telencéfalo */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center justify-between">
                  Telencéfalo
                  <Badge variant="outline">Mais Rostral</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Estruturas Principais:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Hemisférios cerebrais</li>
                      <li>• Córtex cerebral</li>
                      <li>• Núcleos da base</li>
                      <li>• Sistema límbico</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Cavidades:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ventrículos laterais</li>
                      <li>• Cornos anterior e posterior</li>
                      <li>• Corno temporal</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Funções Futuras:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Funções cognitivas superiores</li>
                      <li>• Controle motor voluntário</li>
                      <li>• Processamento sensorial</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diencéfalo */}
            <Card className="border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="text-indigo-700 flex items-center justify-between">
                  Diencéfalo
                  <Badge variant="outline">Região Central</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Estruturas Principais:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tálamo</li>
                      <li>• Hipotálamo</li>
                      <li>• Epitálamo (pineal)</li>
                      <li>• Subtálamo</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Cavidade:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Terceiro ventrículo</li>
                      <li>• Recesso infundibular</li>
                      <li>• Recesso pineal</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Funções Futuras:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Relé sensorial</li>
                      <li>• Controle endócrino</li>
                      <li>• Regulação circadiana</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mesencéfalo */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center justify-between">
                  Mesencéfalo
                  <Badge variant="outline">Sem Divisão</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Estruturas Principais:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Teto (colículos)</li>
                      <li>• Tegmento</li>
                      <li>• Pedúnculos cerebrais</li>
                      <li>• Substância negra</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Cavidade:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Aqueduto cerebral</li>
                      <li>• (Aqueduto de Sylvius)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Funções Futuras:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Reflexos visuais/auditivos</li>
                      <li>• Controle motor</li>
                      <li>• Movimentos oculares</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metencéfalo */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-700 flex items-center justify-between">
                  Metencéfalo
                  <Badge variant="outline">Porção Superior</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Estruturas Principais:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cerebelo</li>
                      <li>• Ponte</li>
                      <li>• Pedúnculos cerebelares</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Cavidade:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Quarto ventrículo</li>
                      <li>• (porção superior)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Funções Futuras:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Coordenação motora</li>
                      <li>• Equilíbrio</li>
                      <li>• Aprendizado motor</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mielencéfalo */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center justify-between">
                  Mielencéfalo
                  <Badge variant="outline">Mais Caudal</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Estruturas Principais:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Medula oblonga (bulbo)</li>
                      <li>• Pirâmides</li>
                      <li>• Olivas</li>
                      <li>• Núcleos dos nervos cranianos</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Cavidade:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Quarto ventrículo</li>
                      <li>• (porção inferior)</li>
                      <li>• Canal central</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Funções Futuras:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Funções vitais</li>
                      <li>• Reflexos</li>
                      <li>• Controle autonômico</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Flexura Pontina */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dna className="h-5 w-5 text-purple-600" />
                Flexura Pontina
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Durante a formação das vesículas secundárias, desenvolve-se uma terceira flexura importante: a
                    flexura pontina, localizada na região do metencéfalo.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Características:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Localização:</strong> Região do futuro cerebelo
                      </li>
                      <li>
                        • <strong>Direção:</strong> Oposta às outras flexuras
                      </li>
                      <li>
                        • <strong>Resultado:</strong> Expansão do quarto ventrículo
                      </li>
                      <li>
                        • <strong>Importância:</strong> Permite desenvolvimento cerebelar
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Consequências da Flexura Pontina</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Adelgaçamento do teto do rombencéfalo</li>
                      <li>• Formação da placa alar cerebelar</li>
                      <li>• Estabelecimento do padrão de dobramento cortical</li>
                      <li>• Posicionamento dos núcleos pontinos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="flex justify-between items-center pt-8">
          <Link href="/etapas/vesiculas-primarias">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Etapa Anterior: Vesículas Primárias
            </Button>
          </Link>
          <Link href="/etapas/crista-neural">
            <Button>
              Próxima Etapa: Crista Neural
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
