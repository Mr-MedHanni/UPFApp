import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface MenuItem {
  id: string;
  title: string;
  icon: ImageSourcePropType;
  selected?: boolean;
}

interface HorizontalMenuProps {
  menuItems: MenuItem[];
  onMenuItemPress: (id: string) => void;
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ menuItems, onMenuItemPress }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuScrollView}>
      {menuItems.map((item) => (
        <TouchableOpacity key={item.id} style={styles.menuItem} onPress={() => onMenuItemPress(item.id)}>
          <View style={item.selected ? styles.iconCircleSelected : styles.iconCircle}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <Text style={item.selected ? styles.menuTextSelected : styles.menuText}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuScrollView: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  menuItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  iconCircle: {
    width: 57,
    height: 57,
    borderRadius: 28.5,
    backgroundColor: '#FDECEC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconCircleSelected: {
    width: 57,
    height: 57,
    borderRadius: 28.5,
    backgroundColor: '#C10074', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  menuText: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'center',
  },
  menuTextSelected: {
    fontSize: 12,
    color: '#C10074', 
    textAlign: 'center',
  },
});

export default HorizontalMenu;
