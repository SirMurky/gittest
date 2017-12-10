import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'CV App',
  };
  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View>
        <Button
            onPress={() => navigate('Pagrindinis')}
            title="Petras ( CV - IT specialist )"
          />
           <Button
            onPress={() => navigate('Pagrindinis2')}
            title="Povilas ( CV - Accountant )"
          />
           <Button
            onPress={() => navigate('Pagrindinis3')}
            title="Robertas ( CV - C# Developer)"
          />
           <Button
            onPress={() => navigate('Pagrindinis4')}
            title="Jonas ( CV - Java Developer)"
          />
           <Button
            onPress={() => navigate('Pagrindinis5')}
            title="Antanas ( CV - React-Native Developer)"
          />
           <Button
            onPress={() => navigate('')}
            title="Rolandas ( CV - React-Native Developer)"
          />
           <Button
            onPress={() => navigate('')}
            title="Petras - (CV - MrRepairMan)"
          />
           <Button
            onPress={() => navigate('')}
            title="Brigita (CV - Designer)"
          />
           <Button
            onPress={() => navigate('')}
            title="Mike ( CV - Junior programmer teacher)"
          />
           <Button
            onPress={() => navigate('')}
            title="Michael ( CV - It Support)"
          />
           <Button
            onPress={() => navigate('')}
            title="Blank ( CV - Error not found)"
          />
           <Button
            onPress={() => navigate('')}
            title="Petrazole ( CV - Be delicious)"
          />
           <Button
            onPress={() => navigate('')}
            title="NoIdea(CV - AllIn)"
          />
           <Button
            onPress={() => navigate('')}
            title="Mante ( CV - Secretory)"
          />
           <Button
            onPress={() => navigate('')}
            title="MRNobody ( CV - slacker )"
          />
           <Button
            onPress={() => navigate('')}
            title="Vaiduoklis (CV - Team Spirit)"
          />
           <Button
            onPress={() => navigate('')}
            title="Mantas ( CV - Team Manager)"
          />
           <Button
            onPress={() => navigate('')}
            title="Martynas ( CV - Accountant)"
          />
           <Button
            onPress={() => navigate('')}
            title="Mandalas (CV - Java Developer)"
          />
           <Button
            onPress={() => navigate('')}
            title="Dovile (CV - Technician)"
          />
           <Button
            onPress={() => navigate('')}
            title="Ona (CV - IT Consultant)"
          />
           <Text>
          
           ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          </Text>
          
      </View>);
  }
}

class PagrindinisScreen3 extends React.Component {
  static navigationOptions = {
    title: 'Pagrindinis',
  };
  render() {
        const {navigate} = this.props.navigation; 
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}>KANDIDATAS</Text>
    <Image
        source={{ uri: 'https://si.wsj.net/public/resources/images/BN-QI584_1019cl_J_20161019001039.jpg' }}
        style={{ height: 350, width: 400 }}
      />
    <Text style={{color:'red',textAlign:'center'}}> Vardas: Robertas </Text>
    <Text style={{color:'red',textAlign:'center'}}> Pavarde: Kafka </Text>
    <Text style={{color:'red',textAlign:'center'}}> Amzius: 27 </Text>
     <Button
            onPress={() => navigate('Darbo3')}
            title="Darbo patirtis"
          />
          <Button
            onPress={() => navigate('Asmeniniai')}
            title="Asmeniniai gebejimai"
          />
          
          <Button onPress={() => navigate('Call')}
          title="Pakviesti i darbo pokalbi"
          />
          </View>
    )

  }
}

class PagrindinisScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Pagrindinis',
  };
  render() {
        const {navigate} = this.props.navigation; 
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}>KANDIDATAS</Text>
     <Image
        source={{ uri: 'https://www.gannett-cdn.com/-mm-/c26eee5c92614372f5d461d9215ac9f1e1f0bea8/c=0-164-4096-2478&r=1280x720/local/-/media/2017/05/05/USATODAY/USATODAY/636295954979961452-EPA-FILE-FRANCE-USA-PEOPLE-86898216.JPG' }}
        style={{ height: 350, width: 400 }}
      />
    <Text style={{color:'red',textAlign:'center'}}> Vardas: Povilas </Text>
    <Text style={{color:'red',textAlign:'center'}}> Pavarde: Mikalauskas </Text>
    <Text style={{color:'red',textAlign:'center'}}> Amzius: 54 </Text>
     <Button
            onPress={() => navigate('Darbo2')}
            title="Darbo patirtis"
          />
          <Button
            onPress={() => navigate('Asmeniniai')}
            title="Asmeniniai gebejimai"
          />
          
          <Button onPress={() => navigate('Call')}
          title="Pakviesti i darbo pokalbi"
          />
          </View>
    )

  }
}

class PagrindinisScreen extends React.Component {
  static navigationOptions = {
    title: 'Pagrindinis',
  };
  render() {
        const {navigate} = this.props.navigation; 
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}>KANDIDATAS</Text>
    <Image
        source={{ uri: 'https://static.pexels.com/photos/428341/pexels-photo-428341.jpeg' }}
        style={{ height: 350, width: 400 }}
      />
    <Text style={{color:'red',textAlign:'center'}}> Vardas: Petras </Text>
    <Text style={{color:'red',textAlign:'center'}}> Pavarde: Mikolauskas </Text>
    <Text style={{color:'red',textAlign:'center'}}> Amzius: 28 </Text>
     <Button
            onPress={() => navigate('Darbo')}
            title="Darbo patirtis"
          />
          <Button
            onPress={() => navigate('Asmeniniai')}
            title="Asmeniniai gebejimai"
          />
          
          <Button onPress={() => navigate('Call')}
          title="Pakviesti i darbo pokalbi"
          />
          </View>
    )

  }
}

class PagrindinisScreen4 extends React.Component {
  static navigationOptions = {
    title: 'Pagrindinis',
  };
  render() {
        const {navigate} = this.props.navigation; 
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}>KANDIDATAS</Text>
      <Image
        source={{ uri: 'http://dreamicus.com/data/face/face-04.jpg' }}
        style={{ height: 350, width: 400 }}
      />
    
    <Text style={{color:'red',textAlign:'center'}}> Vardas: Jonas </Text>
    <Text style={{color:'red',textAlign:'center'}}> Pavarde: Kaziukas </Text>
    <Text style={{color:'red',textAlign:'center'}}> Amzius: 28 </Text>
     <Button
            onPress={() => navigate('Darbo4')}
            title="Darbo patirtis"
          />
          <Button
            onPress={() => navigate('Asmeniniai')}
            title="Asmeniniai gebejimai"
          />
          
          <Button onPress={() => navigate('Call')}
          title="Pakviesti i darbo pokalbi"
          />
          </View>
    )

  }
}

class PagrindinisScreen5 extends React.Component {
  static navigationOptions = {
    title: 'Pagrindinis',
  };
  render() {
        const {navigate} = this.props.navigation; 
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}>KANDIDATAS</Text>
    <Image
        source={{ uri: 'https://news.osu.edu/assets/notface4.jpg' }}
        style={{ height: 350, width: 400 }}
      />
    <Text style={{color:'red',textAlign:'center'}}> Vardas: Antanas </Text>
    <Text style={{color:'red',textAlign:'center'}}> Pavarde: Karaliautis </Text>
    <Text style={{color:'red',textAlign:'center'}}> Amzius: 45 </Text>
     <Button
            onPress={() => navigate('Darbo5')}
            title="Darbo patirtis"
          />
          <Button
            onPress={() => navigate('Asmeniniai')}
            title="Asmeniniai gebejimai"
          />
          
          <Button onPress={() => navigate('Call')}
          title="Pakviesti i darbo pokalbi"
          />
          </View>
    )

  }
}
class DarboScreen extends React.Component {
  static navigationOptions = {
    title: 'Darbo',
  
  };
  render() {
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}> Darbo ekranas!</Text>
    <Text style={{color:'red',textAlign:'center'}}> Darbo patirtis: Anksciau nedirbes </Text>
    <Text style={{color:'red',textAlign:'center'}}> Issilavinimas: Karoliniskiu gimnazija </Text>
    </View>
    )
  }
}

class DarboScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Darbo',
  
  };
  render() {
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}> Darbo ekranas!</Text>
    <Text style={{color:'red',textAlign:'center'}}> Darbo patirtis: Danske Bank ( IT Support) || Barclays ( IT Support)</Text>
    <Text style={{color:'red',textAlign:'center'}}> Issilavinimas: Karoliniskiu gimnazija || VIKO</Text>
    </View>
    )
  }
}

class DarboScreen3 extends React.Component {
  static navigationOptions = {
    title: 'Darbo',
  
  };
  render() {
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}> Darbo ekranas!</Text>
    <Text style={{color:'red',textAlign:'center'}}> Darbo patirtis: VMI || Viko </Text>
    <Text style={{color:'red',textAlign:'center'}}> Issilavinimas: VGTU || VU </Text>
    </View>
    )
  }
}

class DarboScreen4 extends React.Component {
  static navigationOptions = {
    title: 'Darbo',
  
  };
  render() {
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}> Darbo ekranas!</Text>
    <Text style={{color:'red',textAlign:'center'}}> Darbo patirtis: Anksciau nedirbes </Text>
    <Text style={{color:'red',textAlign:'center'}}> Issilavinimas: Karoliniskiu gimnazija </Text>
    </View>
    )
  }
}

class DarboScreen5 extends React.Component {
  static navigationOptions = {
    title: 'Darbo',
  
  };
  render() {
    return (
      <View>
    <Text style={{color:'red',textAlign:'center'}}> Darbo ekranas!</Text>
    <Text style={{color:'red',textAlign:'center'}}> Darbo patirtis: Anksciau nedirbes </Text>
    <Text style={{color:'red',textAlign:'center'}}> Issilavinimas: Karoliniskiu gimnazija </Text>
    </View>
    )
  }
}
class AsmeniniaiScreen extends React.Component {
  static navigationOptions = {
    title: 'Asmeniniai',
  };
  render() {
    return (
      <View>
      <Text style={{color:'red',textAlign:'center'}}>Asmeniniai igudziai!</Text>
      <Text style={{color:'red',textAlign:'center'}}> Gimtoji Kalba: Lietuviu</Text>
      <Text style={{color:'red',textAlign:'center'}}> Uzsienio Kalba1: Rusu </Text>
      <Text style={{color:'red',textAlign:'center'}}> Uzsienio Kalba2: Anglu </Text>
      </View>
    )
  }
}

class CallScreen extends React.Component {
  static navigationOptions = {
    title: 'Kvietimas',
  };
  render() {
    return <Text style={{color:'red',textAlign:'center'}}>Kvietimas i darbo pokalbi issiustas!</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Pagrindinis: { screen: PagrindinisScreen },
  Pagrindinis2: { screen: PagrindinisScreen2 },
  Pagrindinis3: { screen: PagrindinisScreen3 },
   Pagrindinis4: { screen: PagrindinisScreen4 },
    Pagrindinis5: { screen: PagrindinisScreen5 },
  
  Darbo: {screen: DarboScreen},
   Darbo2: {screen: DarboScreen2},
    Darbo3: {screen: DarboScreen3},
     Darbo4: {screen: DarboScreen4},
      Darbo5: {screen: DarboScreen5},
  Asmeniniai: {screen: AsmeniniaiScreen},
  Call: {screen: CallScreen}
});

export default SimpleApp;
