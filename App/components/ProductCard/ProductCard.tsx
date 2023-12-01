import { StyleSheet } from "react-native"
import { Image, View } from "react-native"
import {  IProductDetail } from "../../common/networkTypes"
import Icon from "../icon/icon"

export interface IProductCardProps extends IProductDetail{
    isAddedToFav:boolean
}

const ProductCard=(props:IProductCardProps)=>{
    const {images,thumbnail, isAddedToFav}=props
    return (
        <View style={styles.cardContainer}>
            <Icon size='md' iconPack="MaterialCommunityIcons" name={isAddedToFav?"heart":'heart-outline'} color={isAddedToFav?'#FF8181':'#323743'} style={styles.icon} />
            <Image source={{uri:thumbnail}} style={styles.thumbnailImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        height:194,
        width:160,
    },
    thumbnailImage:{
        height:68,
        width:68,
    },
    icon:{
        position:'absolute',
        top:10,
        left:10
    }
  });

  export default ProductCard