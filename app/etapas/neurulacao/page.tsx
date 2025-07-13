"use client"

import { ArrowLeft, Clock, Dna, AlertTriangle, Microscope, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function NeurulacaoPage() {
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
                Semana 3
              </Badge>
              <h1 className="text-2xl font-bold text-gray-900">Neurulação</h1>
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
                <Clock className="h-5 w-5 text-blue-600" />
                Visão Geral da Neurulação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    A neurulação é o processo fundamental que marca o início do desenvolvimento do sistema nervoso.
                    Durante a terceira semana de gestação, a placa neural se transforma no tubo neural através de uma
                    série complexa de eventos morfogenéticos coordenados.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-800">Cronologia:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        • <strong>Dia 18:</strong> Formação da placa neural
                      </li>
                      <li>
                        • <strong>Dia 20:</strong> Início da invaginação
                      </li>
                      <li>
                        • <strong>Dia 22:</strong> Fechamento do neuroporo anterior
                      </li>
                      <li>
                        • <strong>Dia 26:</strong> Fechamento do neuroporo posterior
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

        {/* Aspectos Moleculares */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dna className="h-5 w-5 text-purple-600" />
                Mecanismos Moleculares
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Indução Neural</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Organizador de Spemann:</strong> Região que induz a formação da placa neural
                    </p>
                    <p>
                      <strong>Fatores indutores:</strong> Noggin, Chordin, Follistatin
                    </p>
                    <p>
                      <strong>Inibição de BMP:</strong> Essencial para especificação neural
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Morfogênese</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Constrição apical:</strong> Mudança na forma celular
                    </p>
                    <p>
                      <strong>Convergência-extensão:</strong> Alongamento da placa neural
                    </p>
                    <p>
                      <strong>Adesão celular:</strong> N-caderina e outras moléculas
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Fechamento</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Pontos de fechamento:</strong> Múltiplos locais de iniciação
                    </p>
                    <p>
                      <strong>Fusão das bordas:</strong> Processo de "zipping"
                    </p>
                    <p>
                      <strong>Remodelação:</strong> Formação da crista neural
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Genes Reguladores Chave</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">PAX3/PAX7</Badge>
                    <p className="text-sm text-gray-600">Especificação da placa neural e crista neural</p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">MSX1/MSX2</Badge>
                    <p className="text-sm text-gray-600">Regulação do fechamento do tubo neural</p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">SHH</Badge>
                    <p className="text-sm text-gray-600">Padronização dorso-ventral</p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">WNT</Badge>
                    <p className="text-sm text-gray-600">Sinalização para diferenciação neural</p>
                  </div>
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
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Defeitos do Tubo Neural
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Anencefalia</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Causa:</strong> Falha no fechamento do neuroporo anterior
                    </p>
                    <p>
                      <strong>Incidência:</strong> 1:1000 nascimentos
                    </p>
                    <p>
                      <strong>Características:</strong> Ausência de cérebro e calota craniana
                    </p>
                    <p>
                      <strong>Prognóstico:</strong> Incompatível com a vida
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Espinha Bífida</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Causa:</strong> Falha no fechamento do neuroporo posterior
                    </p>
                    <p>
                      <strong>Tipos:</strong> Oculta, meningocele, mielomeningocele
                    </p>
                    <p>
                      <strong>Localização:</strong> Região lombossacral (mais comum)
                    </p>
                    <p>
                      <strong>Consequências:</strong> Déficits neurológicos variáveis
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Prevenção com Ácido Fólico</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <p>
                    • <strong>Dosagem:</strong> 400-800 μg/dia antes da concepção
                  </p>
                  <p>
                    • <strong>Mecanismo:</strong> Cofator em reações de metilação do DNA
                  </p>
                  <p>
                    • <strong>Eficácia:</strong> Redução de 50-70% dos defeitos do tubo neural
                  </p>
                  <p>
                    • <strong>Período crítico:</strong> 4 semanas antes da concepção até 8ª semana gestacional
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Aspectos Clínicos */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5 text-green-600" />
                Relevância Clínica e Diagnóstico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Diagnóstico Pré-natal</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Ultrassonografia:</strong> Detecção a partir da 16ª semana
                    </p>
                    <p>
                      <strong>Alfafetoproteína:</strong> Elevada no soro materno e líquido amniótico
                    </p>
                    <p>
                      <strong>Ressonância magnética fetal:</strong> Avaliação detalhada das malformações
                    </p>
                    <p>
                      <strong>Amniocentese:</strong> Confirmação diagnóstica
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Fatores de Risco</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Genéticos:</strong> Mutações em MTHFR, PAX3
                    </p>
                    <p>
                      <strong>Nutricionais:</strong> Deficiência de folato, B12
                    </p>
                    <p>
                      <strong>Ambientais:</strong> Hipertermia, diabetes materno
                    </p>
                    <p>
                      <strong>Medicamentos:</strong> Anticonvulsivantes, metotrexato
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="flex justify-between items-center pt-8">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Página Principal
            </Button>
          </Link>
          <Link href="/etapas/vesiculas-primarias">
            <Button>
              Próxima Etapa: Vesículas Primárias
              <BookOpen className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  )
}
