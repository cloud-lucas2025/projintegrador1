"use client"

import { ArrowLeft, Brain, Microscope, ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function DiferenciacaoPage() {
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
                2º Trimestre
              </Badge>
              <h1 className="text-2xl font-bold text-gray-900">Diferenciação Neural</h1>
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
                <Zap className="h-5 w-5 text-blue-600" />
                Neurogênese e Gliogênese
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Durante o segundo trimestre, ocorre a fase mais intensa de diferenciação neural. As células
                    precursoras se especializam em neurônios e células gliais, estabelecendo os fundamentos da
                    arquitetura neural definitiva.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">Cronologia da Diferenciação:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>12-16 semanas:</strong> Pico da neurogênese cortical
                      </li>
                      <li>
                        • <strong>16-20 semanas:</strong> Início da gliogênese
                      </li>
                      <li>
                        • <strong>20-24 semanas:</strong> Formação de sinapses
                      </li>
                      <li>
                        • <strong>24-28 semanas:</strong> Início da mielinização
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

        {/* Neurogênese */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Neurogênese Cortical
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Zonas Germinativas</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Badge variant="secondary">Zona Ventricular (VZ)</Badge>
                      <p className="text-sm text-gray-600">
                        Local de divisão das células precursoras neurais. Contém células da glia radial que atuam como
                        progenitores neurais.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary">Zona Subventricular (SVZ)</Badge>
                      <p className="text-sm text-gray-600">
                        Zona secundária de proliferação. Contém progenitores intermediários que amplificam a produção
                        neuronal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Padrão de Divisão</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Divisões simétricas:</strong> Expansão do pool de progenitores
                    </p>
                    <p>
                      <strong>Divisões assimétricas:</strong> Geração de neurônios diferenciados
                    </p>
                    <p>
                      <strong>Mudança temporal:</strong> Simétrica → assimétrica durante desenvolvimento
                    </p>
                    <p>
                      <strong>Regulação:</strong> Fatores intrínsecos e sinais ambientais
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Migração Neuronal</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Migração Radial</h4>
                    <p className="text-sm text-gray-600">
                      Neurônios migram ao longo das fibras da glia radial da zona ventricular até suas posições finais
                      no córtex.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Migração Tangencial</h4>
                    <p className="text-sm text-gray-600">
                      Interneurônios GABAérgicos migram tangencialmente das eminências ganglionares para o córtex.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Padrão Inside-Out</h4>
                    <p className="text-sm text-gray-600">
                      Neurônios gerados mais tarde migram além dos gerados anteriormente, criando as camadas corticais.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gliogênese */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-green-600" />
                Gliogênese
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                A gliogênese segue a neurogênese, com células precursoras se diferenciando nos diferentes tipos de
                células gliais.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-blue-700 text-lg">Astrócitos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Origem:</h4>
                      <p className="text-sm text-gray-600">Glia radial e progenitores astrogliais</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Funções:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Suporte metabólico</li>
                        <li>• Homeostase iônica</li>
                        <li>• Barreira hematoencefálica</li>
                        <li>• Modulação sináptica</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Marcadores:</h4>
                      <p className="text-sm text-gray-600">GFAP, S100β, ALDH1L1</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-green-700 text-lg">Oligodendrócitos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Origem:</h4>
                      <p className="text-sm text-gray-600">Progenitores oligodendrocitários (OPCs)</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Funções:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Mielinização no SNC</li>
                        <li>• Suporte trófico</li>
                        <li>• Condução saltatória</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Marcadores:</h4>
                      <p className="text-sm text-gray-600">MBP, PLP, MOG, Olig2</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="text-purple-700 text-lg">Microglia</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Origem:</h4>
                      <p className="text-sm text-gray-600">Células mieloides do saco vitelino</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Funções:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fagocitose</li>
                        <li>• Poda sináptica</li>
                        <li>• Resposta imune</li>
                        <li>• Neuroproteção</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Marcadores:</h4>
                      <p className="text-sm text-gray-600">Iba1, CD11b, CX3CR1</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sinaptogênese */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                Sinaptogênese
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Formação de Sinapses</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>1. Crescimento axonal:</strong> Orientação por sinais moleculares
                    </p>
                    <p>
                      <strong>2. Reconhecimento:</strong> Moléculas de adesão celular
                    </p>
                    <p>
                      <strong>3. Diferenciação:</strong> Especialização pré e pós-sináptica
                    </p>
                    <p>
                      <strong>4. Maturação:</strong> Refinamento funcional
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Moléculas Chave:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Neurexinas</Badge>
                      <Badge variant="outline">Neuroliginas</Badge>
                      <Badge variant="outline">Cadherinas</Badge>
                      <Badge variant="outline">SynCAM</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Tipos de Sinapses</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Sinapses Excitatórias</h4>
                      <p className="text-sm text-gray-600">
                        Glutamatérgicas, formam espinhas dendríticas, receptores AMPA/NMDA
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Sinapses Inibitórias</h4>
                      <p className="text-sm text-gray-600">
                        GABAérgicas, formam sinapses no soma e dendritos, receptores GABA-A/B
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Período Crítico</h4>
                <p className="text-sm text-yellow-700">
                  A sinaptogênese ocorre em períodos críticos específicos para cada região cerebral. Durante esses
                  períodos, a experiência sensorial é crucial para o desenvolvimento normal das conexões neurais.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="flex justify-between items-center pt-8">
          <Link href="/etapas/crista-neural">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Etapa Anterior: Crista Neural
            </Button>
          </Link>
          <Link href="/etapas/maturacao">
            <Button>
              Próxima Etapa: Maturação
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
