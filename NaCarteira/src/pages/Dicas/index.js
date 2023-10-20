import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View,
    Text, 
    StyleSheet,
    StatusBar
} from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const slides = [
    {
        key: '1',
        title: 'Estabeleça metas financeiras',
        subtitle: '1- Liste suas metas e seus sonhos',
        text: 'Definir metas pessoais e profissionais começa por entender seus objetivos. Isso funciona como um mapa, orientando seus passos. Liste todos os seus desejos, desde os menores até os maiores, para obter clareza sobre o que você quer. Não restrinja sua lista inicialmente e use o autoconhecimento para identificar seus sonhos.',
      },
      {
        key: '2',
        title: 'Estabeleça metas financeiras',
        subtitle: '2- Organize as metas em diferentes prazos',
        text: 'Suas metas têm diferentes prazos, e você os define com base no seu orçamento. De maneira geral, uma sugestão é separá-las em metas de: curtíssimo prazo (até 3 meses), curto prazo (até 1 ano), médio prazo (até 5 anos) e longo prazo (acima de 10 anos).',
      },
      {
        key: '3',
        title: 'Estabeleça metas financeiras',
        subtitle: '3- Descubra quanto custa realizar cada meta',
        text: 'Para organizar metas anuais, é importante saber o custo do seu objetivo, seja comprar uma casa ou fazer uma viagem. Ter o valor exato ajuda a determinar os próximos passos e a avaliar quando alcançará sua meta.',
      },
      {
        key: '4',
        title: 'Estabeleça metas financeiras',
        subtitle: '4- Priorize as metas mais importantes para você',
        text: 'Após listar metas com prazos e valores, organize-as por ordem de prioridade, considerando o que é mais importante. Mesmo que algumas não possam ser alcançadas no prazo desejado, isso ajuda a entender suas prioridades.',
      },
      {
        key: '5',
        title: 'Estabeleça metas financeiras',
        subtitle: '5- Descreva as suas metas de forma mensurável',
        text: 'Para criar metas pessoais eficazes, você pode aplicar o conceito SMART, que significa:\n\n• Specific (Específicas)\n• Measurable (Mensuráveis)\n• Achievable (Alcançáveis)\n• Realistic (Realistas)\n• Time-based (Temporais)\n\nOu seja, se você tem o desejo de comprar algo, é necessário criar uma meta que defina:\n• Quanto custa;\n• Para quando você quer;\n• Como é esse desejo;\n• Porque ele é importante.',
      },
      {
        key: '6',
        title: 'Estabeleça metas financeiras',
        subtitle: '6- Divida suas metas em submetas',
        text: 'Uma das maneiras de tornar uma meta desafiadora mais plausível e alcançável é dividi-la em partes. Por exemplo: Para ter R$30 mil em dois anos você precisará juntar R$1.250 por mês ou R$7.500 por semestre.',
      },
      {
        key: '7',
        title: 'Estabeleça metas financeiras',
        subtitle: '7- Defina estratégias de investimento',
        text: 'Para atingir suas metas financeiras, organize estratégias para economizar o capital necessário. Isso pode envolver a redução de gastos não relacionados aos seus objetivos, a busca por fontes adicionais de renda, como um segundo emprego ou aperfeiçoamento profissional, e a escolha de investimentos mais vantajosos.',
      },
      {
        key: '8',
        title: 'Quite suas dívidas',
        subtitle: '1- Anote todas suas dívidas',
        text: 'Caso tenha mais de uma dívida, comece separando entre as que têm juros maiores e as que são menores.',
      },
      {
        key: '9',
        title: 'Quite suas dívidas',
        subtitle: '2- Organize o seu orçamento',
        text: 'Além de contar com a planilha de gastos, que ajuda a controlar as entradas e saídas do seu dinheiro, é importante destinar uma parte do seu orçamento para quitar suas dívidas.',
      },
      {
        key: '10',
        title: 'Quite suas dívidas',
        subtitle: '3- Monte um plano de pagamento',
        text: 'Com o orçamento organizado, é hora de procurar os credores e entender as possibilidades de renegociação das dívidas. Evite parcelas mensais que comprometam o seu orçamento. Um plano de pagamento eficaz é aquele que respeita a sua organização e realidade financeira.',
      },
      {
        key: '11',
        title: 'Quite suas dívidas',
        subtitle: '4- Mantenha o foco, corte gastos e defina prioridades',
        text: 'Pequenas mudanças na rotina, como reduzir o uso do carro, evitar compras supérfluas, cozinhar mais em vez de usar aplicativos de delivery, dentre outras ações, ajudam a controlar melhor o seu dinheiro. Outra dica, é colocar as suas contas em débito automático para evitar atrasos, juros e consequentemente, novas dívidas.',
      },
      {
        key: '12',
        title: 'Quite suas dívidas',
        subtitle: '5- Não crie novas dívidas',
        text: 'Dê preferência para pagamentos à vista e utilize cartões de créditos para compras maiores. Antes de fazer qualquer compra, verifique se suas finanças estão saudáveis e se você terá recursos para pagar em dia. Priorize o pagamento das dívidas, a fim de evitar mais juros e manter o controle sobre suas finanças. Mantenha uma reserva de emergência para cobrir despesas inesperadas.',
      },
      {
        key: '13',
        title: 'Crie um fundo emergencial',
        subtitle: '1- Faça seu orçamento pessoal',
        text: 'É fundamental elaborar um orçamento para entender como estão suas finanças e, principalmente, para segui-lo. É difícil ter um fundo de emergência se o nosso salário não atende as necessidades que temos durante o mês.',
      },
      {
        key: '14',
        title: 'Crie um fundo emergencial',
        subtitle: '2- Tenha controle financeiro',
        text: 'A partir de uma boa organização e gastos controlados é que você vai conseguir separar o necessário para reservar para o seu fundo de emergência.',
      },
      {
        key: '15',
        title: 'Crie um fundo emergencial',
        subtitle: '3- Calcule o valor do seu fundo',
        text: 'O fundo de emergência deve cobrir, em geral, de 6 e 12 meses das despesas da família. É importante frisar que quanto maior for a quantidade de dinheiro em seu fundo de emergência, menor será a probabilidade de ter problemas financeiros caso ocorra qualquer eventualidade. Conhecendo o valor médio das suas despesas mensais e o tempo necessário para o seu fundo, multiplique pelo número de meses definido e você obterá o valor exato que deverá ter em seu fundo de emergência.',
      },
      {
        key: '16',
        title: 'Crie um fundo emergencial',
        subtitle: '4- Comece a poupar',
        text: 'Depois de saber o valor ideal para o seu fundo, é hora de começar a juntar dinheiro. Para isso, preferencialmente, coloque seu fundo de emergências em uma conta separada (exclusiva para as situações imprevistas).',
      },
      {
        key: '17',
        title: 'Crie um fundo emergencial',
        subtitle: '5- Reabasteça quando necessário',
        text: 'Não esqueça de reabastecer seu fundo sempre que precisar usá-lo para cobrir gastos inesperados. Não fique com receio de usar sua reserva, ela serve para isso mesmo, mas precisa ser reposta para manter sua segurança ao longo dos meses.',
      },
]

const Dicas = () => {

    function renderSlides({ item }){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <View style={styles.containerTexto}>
                <Text style={styles.texto}>{item.text}</Text>
                </View>
                </View>
            </View>
        
        )
    }

 return (
    <AppIntroSlider
    renderItem={renderSlides}
    data={slides}
    activeDotStyle={{
        backgroundColor: '#FF8C00',
        width: 30,
    }}
    renderDoneButton={ () => {} }
    renderNextButton={ () => {} }
    />
  );
}

export default Dicas;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: statusBarHeigth,
    },
    content:{
        flex: 1,
    },
    titulo:{
        paddingTop: 25,
        paddingBottom: 15,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF8C00',
    },
    subtitle:{
        textAlign: 'center',
        paddingHorizontal: 25,
        fontSize: 26,
        marginBottom: 5,
        color: '#FFAA00'
    },
    texto:{
        marginTop: 10,
        textAlign: 'center',
        fontSize: 22,
        paddingHorizontal: 25,
    },
    containerTexto:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: '5%'
    },
})