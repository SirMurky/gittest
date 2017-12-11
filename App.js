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

