"use client"

import { ArrowLeft, Dna, Brain, Microscope, BookOpen, ArrowRight, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CristaNeuralPage() {
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
                Semana 6-8
              </Badge>
              <h1 className="text-2xl font-bold text-gray-900">Crista Neural</h1>
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
                <Users className="h-5 w-5 text-blue-600" />A "Quarta Camada Germinativa"
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    A crista neural é uma população transitória de células multipotentes que se origina na junção entre
                    a placa neural e o ectoderma não-neural. Estas células são únicas por sua capacidade migratória
                    extraordinária e potencial de diferenciação diversificado.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">Características Únicas:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Multipotência:</strong> Origina múltiplos tipos celulares
                      </li>
                      <li>
                        • <strong>Migração:</strong> Percorre longas distâncias
                      </li>
                      <li>
                        • <strong>Transição EMT:</strong> Epitélio → mesenquimal
                      </li>
                      <li>
                        • <strong>Especificação regional:</strong> Diferentes potenciais por região
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

        {/* Formação e Indução */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dna className="h-5 w-5 text-purple-600" />
                Formação e Indução
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Processo de Indução</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>1. Especificação inicial:</strong> Interação entre sinais BMP e WNT
                    </p>
                    <p>
                      <strong>2. Indução neural:</strong> Inibição de BMP por Noggin/Chordin
                    </p>
                    <p>
                      <strong>3. Formação da borda:</strong> Gradientes de sinalização
                    </p>
                    <p>
                      <strong>4. Especificação da crista:</strong> Ativação de genes específicos
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Genes Reguladores</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">PAX3/PAX7</Badge>
                      <span className="text-sm text-gray-600">Especificação inicial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">MSX1/MSX2</Badge>
                      <span className="text-sm text-gray-600">Manutenção da multipotência</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">SNAIL/SLUG</Badge>
                      <span className="text-sm text-gray-600">Transição epitélio-mesenquimal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">SOX9/SOX10</Badge>
                      <span className="text-sm text-gray-600">Diferenciação glial</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Rotas Migratórias */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-green-600" />
                Rotas Migratórias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                As células da crista neural seguem rotas migratórias específicas e bem definidas, determinadas por
                sinais moleculares e barreiras físicas.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-blue-700 text-lg">Rota Dorsolateral</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Localização:</h4>
                      <p className="text-sm text-gray-600">Entre ectoderma e somitos</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Destinos Celulares:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Melanócitos</li>
                        <li>• Células de Schwann</li>
                        <li>• Alguns neurônios sensoriais</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Sinais Guia:</h4>
                      <p className="text-sm text-gray-600">PDGF, EDN3, KIT</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-green-700 text-lg">Rota Ventromedial</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Localização:</h4>
                      <p className="text-sm text-gray-600">Através dos somitos e ao redor do tubo neural</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Destinos Celulares:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Gânglios da raiz dorsal</li>
                        <li>• Gânglios autonômicos</li>
                        <li>• Medula adrenal</li>
                        <li>• Células entéricas</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Sinais Guia:</h4>
                      <p className="text-sm text-gray-600">Semaforinas, Netrinas, Efrinas</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Regulação da Migração</h4>
                <p className="text-sm text-green-700">
                  A migração é controlada por uma combinação de sinais atrativos e repulsivos, moléculas de adesão
                  celular e componentes da matriz extracelular. A segmentação dos somitos cria corredores preferenciais
                  para a migração ventromedial.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Derivados da Crista Neural */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-purple-600" />
                Derivados da Crista Neural
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                A crista neural é notável pela diversidade de estruturas que origina, contribuindo para múltiplos
                sistemas orgânicos.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 text-center">Sistema Nervoso Periférico</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Neurônios sensoriais (gânglios da raiz dorsal)</li>
                    <li>• Neurônios autonômicos (simpáticos e parassimpáticos)</li>
                    <li>• Sistema nervoso entérico</li>
                    <li>• Células de Schwann</li>
                    <li>• Células satélite</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 text-center">Sistema Endócrino</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Medula adrenal (cromafins)</li>
                    <li>• Células parafoliculares da tireoide</li>
                    <li>• Células dos corpúsculos carotídeos</li>
                    <li>• Gânglios parassimpáticos</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 text-center">Estruturas Craniofaciais</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ossos e cartilagens faciais</li>
                    <li>• Dentina dos dentes</li>
                    <li>• Músculos lisos dos vasos</li>
                    <li>• Meninges</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 text-center">Pigmentação</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Melanócitos da pele</li>
                    <li>• Melanócitos do folículo piloso</li>
                    <li>• Células pigmentares da íris</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 text-center">Outros Derivados</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Células do estroma corneal</li>
                    <li>• Músculos ciliares</li>
                    <li>• Células do septo aorticopulmonar</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Patologias */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-red-600" />
                Neurocristopatias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Defeitos no desenvolvimento da crista neural resultam em um grupo de patologias conhecidas como
                neurocristopatias, que afetam múltiplos sistemas.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Síndrome de DiGeorge</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Causa:</strong> Defeito na migração da crista neural cardíaca
                    </p>
                    <p>
                      <strong>Características:</strong> Defeitos cardíacos, imunodeficiência, hipocalcemia
                    </p>
                    <p>
                      <strong>Genética:</strong> Deleção 22q11.2
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Doença de Hirschsprung</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Causa:</strong> Falha na migração das células entéricas
                    </p>
                    <p>
                      <strong>Características:</strong> Megacólon aganglionar
                    </p>
                    <p>
                      <strong>Genes envolvidos:</strong> RET, GDNF, EDN3
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Síndrome de Waardenburg</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Causa:</strong> Defeitos na diferenciação de melanócitos
                    </p>
                    <p>
                      <strong>Características:</strong> Surdez, heterocromia, poliose
                    </p>
                    <p>
                      <strong>Genes envolvidos:</strong> PAX3, MITF, SOX10
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Neurofibromatose</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Causa:</strong> Defeitos nas células de Schwann
                    </p>
                    <p>
                      <strong>Características:</strong> Neurofibromas, manchas café-com-leite
                    </p>
                    <p>
                      <strong>Genes envolvidos:</strong> NF1, NF2
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="flex justify-between items-center pt-8">
          <Link href="/etapas/vesiculas-secundarias">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Etapa Anterior: Vesículas Secundárias
            </Button>
          </Link>
          <Link href="/etapas/diferenciacao">
            <Button>
              Próxima Etapa: Diferenciação
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
