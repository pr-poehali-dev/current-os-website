import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface OS {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  developer: string;
  year: number;
  marketShare: number;
  license: string;
  architecture: string[];
  features: string[];
}

const operatingSystems: OS[] = [
  {
    id: 'windows',
    name: 'Windows 11',
    icon: 'Monitor',
    color: 'bg-blue-500',
    description: 'Самая популярная настольная операционная система от Microsoft',
    developer: 'Microsoft',
    year: 2021,
    marketShare: 73,
    license: 'Проприетарная',
    architecture: ['x86-64', 'ARM64'],
    features: ['DirectX 12', 'WSL 2', 'Widgets', 'Snap Layouts', 'Virtual Desktops']
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: 'Apple',
    color: 'bg-gray-800',
    description: 'Элегантная система для компьютеров Apple с фокусом на дизайне',
    developer: 'Apple',
    year: 2001,
    marketShare: 15,
    license: 'Проприетарная',
    architecture: ['ARM64', 'x86-64'],
    features: ['Metal API', 'Continuity', 'Time Machine', 'Spotlight', 'Mission Control']
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: 'Terminal',
    color: 'bg-orange-500',
    description: 'Открытая и гибкая система для разработчиков и серверов',
    developer: 'Open Source',
    year: 1991,
    marketShare: 3,
    license: 'Open Source (GPL)',
    architecture: ['x86-64', 'ARM', 'RISC-V'],
    features: ['Bash Shell', 'Package Managers', 'Customization', 'Security', 'Stability']
  },
  {
    id: 'android',
    name: 'Android',
    icon: 'Smartphone',
    color: 'bg-green-500',
    description: 'Самая популярная мобильная ОС на базе Linux',
    developer: 'Google',
    year: 2008,
    marketShare: 72,
    license: 'Open Source (Apache)',
    architecture: ['ARM', 'ARM64', 'x86'],
    features: ['Play Store', 'Google Services', 'Material Design', 'Widgets', 'Multitasking']
  },
  {
    id: 'ios',
    name: 'iOS',
    icon: 'Tablet',
    color: 'bg-purple-500',
    description: 'Мобильная система Apple с фокусом на безопасности',
    developer: 'Apple',
    year: 2007,
    marketShare: 27,
    license: 'Проприетарная',
    architecture: ['ARM64'],
    features: ['App Store', 'Face ID', 'iCloud', 'Continuity', 'Privacy Features']
  }
];

const Index = () => {
  const [selectedOS, setSelectedOS] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);

  const toggleOS = (osId: string) => {
    if (selectedOS.includes(osId)) {
      setSelectedOS(selectedOS.filter(id => id !== osId));
    } else {
      if (selectedOS.length < 3) {
        setSelectedOS([...selectedOS, osId]);
      }
    }
  };

  const selectedOSData = operatingSystems.filter(os => selectedOS.includes(os.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Cpu" size={48} className="text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Операционные системы
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изучайте и сравнивайте популярные операционные системы
          </p>
        </header>

        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="overview" onClick={() => setCompareMode(false)}>
              <Icon name="LayoutGrid" size={18} className="mr-2" />
              Обзор систем
            </TabsTrigger>
            <TabsTrigger value="compare" onClick={() => setCompareMode(true)}>
              <Icon name="GitCompare" size={18} className="mr-2" />
              Сравнение
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {operatingSystems.map((os, index) => (
                <Card 
                  key={os.id}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${os.color} p-3 rounded-xl text-white`}>
                        <Icon name={os.icon as any} size={32} />
                      </div>
                      <Badge variant="secondary" className="text-lg font-semibold">
                        {os.marketShare}%
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{os.name}</CardTitle>
                    <CardDescription className="text-base">{os.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Разработчик:</span>
                        <span className="font-semibold">{os.developer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Год выпуска:</span>
                        <span className="font-semibold">{os.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Лицензия:</span>
                        <span className="font-semibold">{os.license}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold mb-2">Архитектуры:</p>
                      <div className="flex flex-wrap gap-2">
                        {os.architecture.map(arch => (
                          <Badge key={arch} variant="outline">{arch}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Ключевые возможности:</p>
                      <div className="flex flex-wrap gap-2">
                        {os.features.slice(0, 3).map(feature => (
                          <Badge key={feature} className="bg-primary/10 text-primary hover:bg-primary/20">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant={selectedOS.includes(os.id) ? "default" : "outline"}
                      className="w-full mt-4"
                      onClick={() => toggleOS(os.id)}
                      disabled={!selectedOS.includes(os.id) && selectedOS.length >= 3}
                    >
                      {selectedOS.includes(os.id) ? (
                        <>
                          <Icon name="CheckCircle" size={18} className="mr-2" />
                          Выбрано
                        </>
                      ) : (
                        <>
                          <Icon name="Plus" size={18} className="mr-2" />
                          Сравнить
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compare">
            {selectedOS.length === 0 ? (
              <Card className="p-12 text-center">
                <Icon name="GitCompare" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-bold mb-2">Выберите системы для сравнения</h3>
                <p className="text-muted-foreground mb-6">
                  Вернитесь на вкладку "Обзор систем" и выберите до 3 операционных систем
                </p>
                <Button onClick={() => setCompareMode(false)}>
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  К обзору систем
                </Button>
              </Card>
            ) : (
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
                  <CardTitle className="text-2xl">
                    <Icon name="GitCompare" size={28} className="inline mr-3" />
                    Сравнительная таблица
                  </CardTitle>
                  <CardDescription>Выбрано систем: {selectedOS.length}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-4 font-semibold sticky left-0 bg-muted/50">Характеристика</th>
                          {selectedOSData.map(os => (
                            <th key={os.id} className="text-center p-4 min-w-[200px]">
                              <div className="flex flex-col items-center gap-2">
                                <div className={`${os.color} p-2 rounded-lg text-white`}>
                                  <Icon name={os.icon as any} size={24} />
                                </div>
                                <span className="font-bold">{os.name}</span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold sticky left-0 bg-background">Разработчик</td>
                          {selectedOSData.map(os => (
                            <td key={os.id} className="p-4 text-center">{os.developer}</td>
                          ))}
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold sticky left-0 bg-background">Год выпуска</td>
                          {selectedOSData.map(os => (
                            <td key={os.id} className="p-4 text-center">{os.year}</td>
                          ))}
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold sticky left-0 bg-background">Доля рынка</td>
                          {selectedOSData.map(os => (
                            <td key={os.id} className="p-4 text-center">
                              <Badge variant="secondary" className="text-base font-bold">
                                {os.marketShare}%
                              </Badge>
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold sticky left-0 bg-background">Лицензия</td>
                          {selectedOSData.map(os => (
                            <td key={os.id} className="p-4 text-center">{os.license}</td>
                          ))}
                        </tr>
                        <tr className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold sticky left-0 bg-background">Архитектуры</td>
                          {selectedOSData.map(os => (
                            <td key={os.id} className="p-4">
                              <div className="flex flex-wrap gap-1 justify-center">
                                {os.architecture.map(arch => (
                                  <Badge key={arch} variant="outline" className="text-xs">
                                    {arch}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-semibold sticky left-0 bg-background">Возможности</td>
                          {selectedOSData.map(os => (
                            <td key={os.id} className="p-4">
                              <div className="flex flex-wrap gap-1 justify-center">
                                {os.features.map(feature => (
                                  <Badge key={feature} className="text-xs bg-primary/10 text-primary">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        <footer className="text-center pt-12 border-t">
          <p className="text-muted-foreground">
            Образовательный проект про операционные системы
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
