"use client"

import { ArrowLeft, Dna, Brain, Microscope, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VesiculasPrimariasPage() {
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
                Semana 4
              </Badge>
              <h1 className="text-2xl font-bold text-gray-900">Vesículas Encefálicas Primárias</h1>
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
                Formação das Vesículas Primárias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Durante a quarta semana de desenvolvimento, a extremidade cranial do tubo neural se expande
                    rapidamente, formando três dilatações distintas conhecidas como vesículas encefálicas primárias.
                    Este processo marca o início da regionalização do futuro encéfalo.
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">As Três Vesículas Primárias:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">1</Badge>
                        <span className="font-medium">Prosencéfalo</span>
                        <span className="text-sm text-gray-600">(Encéfalo anterior)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">2</Badge>
                        <span className="font-medium">Mesencéfalo</span>
                        <span className="text-sm text-gray-600">(Encéfalo médio)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">3</Badge>
                        <span className="font-medium">Rombencéfalo</span>
                        <span className="text-sm text-gray-600">(Encéfalo posterior)</span>
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

        {/* Detalhes de Cada Vesícula */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gray-800">Características de Cada Vesícula</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-700">Prosencéfalo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Localização:</h4>
                  <p className="text-sm text-gray-600">Porção mais anterior do tubo neural</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Estruturas Derivadas:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hemisférios cerebrais</li>
                    <li>• Tálamo e hipotálamo</li>
                    <li>• Neurohipófise</li>
                    <li>• Retina e nervo óptico</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Cavidade:</h4>
                  <p className="text-sm text-gray-600">Ventrículos laterais e terceiro ventrículo</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-green-700">Mesencéfalo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Localização:</h4>
                  <p className="text-sm text-gray-600">Porção média, menor vesícula</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Estruturas Derivadas:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Colículos superiores e inferiores</li>
                    <li>• Pedúnculos cerebrais</li>
                    <li>• Núcleos dos nervos III e IV</li>
                    <li>• Substância negra</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Cavidade:</h4>
                  <p className="text-sm text-gray-600">Aqueduto cerebral</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-700">Rombencéfalo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Localização:</h4>
                  <p className="text-sm text-gray-600">Porção posterior, mais próxima da medula</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Estruturas Derivadas:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cerebelo</li>
                    <li>• Ponte</li>
                    <li>• Bulbo (medula oblonga)</li>
                    <li>• Núcleos dos nervos V-XII</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Cavidade:</h4>
                  <p className="text-sm text-gray-600">Quarto ventrículo</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Flexuras Cefálicas */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dna className="h-5 w-5 text-purple-600" />
                Flexuras Cefálicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Durante a formação das vesículas primárias, o tubo neural desenvolve curvaturas características que são
                fundamentais para a configuração final do encéfalo.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Flexura Cefálica (Mesencefálica)</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Localização:</strong> Região do mesencéfalo
                    </p>
                    <p>
                      <strong>Ângulo:</strong> Aproximadamente 90°
                    </p>
                    <p>
                      <strong>Significado:</strong> Primeira flexura a aparecer
                    </p>
                    <p>
                      <strong>Resultado:</strong> Posicionamento ventral do prosencéfalo
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Flexura Cervical</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Localização:</strong> Junção rombencéfalo-medula
                    </p>
                    <p>
                      <strong>Ângulo:</strong> Menos pronunciada
                    </p>
                    <p>
                      <strong>Significado:</strong> Demarca limite encéfalo-medula
                    </p>
                    <p>
                      <strong>Resultado:</strong> Curvatura da região posterior
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Importância das Flexuras</h4>
                <p className="text-sm text-purple-700">
                  As flexuras são essenciais para o desenvolvimento normal do encéfalo, permitindo que estruturas
                  complexas se desenvolvam em um espaço limitado e estabelecendo as relações anatômicas definitivas
                  entre as diferentes regiões encefálicas.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Aspectos Moleculares */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-green-600" />
                Regulação Molecular
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Genes Homeóticos</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Família HOX:</strong> Especificação antero-posterior
                    </p>
                    <p>
                      <strong>OTX1/OTX2:</strong> Desenvolvimento do prosencéfalo
                    </p>
                    <p>
                      <strong>GBX2:</strong> Limite mesencéfalo-rombencéfalo
                    </p>
                    <p>
                      <strong>EN1/EN2:</strong> Desenvolvimento do mesencéfalo
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Centros Organizadores</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Istmo:</strong> Organiza limite mesencéfalo-rombencéfalo
                    </p>
                    <p>
                      <strong>FGF8:</strong> Fator de crescimento chave
                    </p>
                    <p>
                      <strong>WNT1:</strong> Sinalização no mesencéfalo
                    </p>
                    <p>
                      <strong>Zona limitante anterior:</strong> Separação prosencéfalo-mesencéfalo
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="flex justify-between items-center pt-8">
          <Link href="/etapas/neurulacao">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Etapa Anterior: Neurulação
            </Button>
          </Link>
          <Link href="/etapas/vesiculas-secundarias">
            <Button>
              Próxima Etapa: Vesículas Secundárias
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
