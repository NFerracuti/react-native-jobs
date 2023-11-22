import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from "./popularjobcard.style";
// import { checkImageURL } from "../../../../utils";


const PopularJobCard = (item, selectedJob, handleCardPress) => {

  console.log('data item: ', item.item.item.employer_logo);
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}>
      {/* onPress={() => handleCardPress(item)} */}
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.item.item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.item.item.employer_name}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard