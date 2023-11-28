import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = (job, handleNavigate) => {

  // console.log('data job: ', job.job);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate()}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.job.employer_logo)
              ? job.job.employer_logo
              : "https://i.imgur.com/sJ6MrIV.png"
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job.job_title}
        </Text>
        <Text style={styles.location}>{job.job.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard