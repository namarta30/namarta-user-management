
interface ImageProps {
  imageUrl: string;
  widthData: number | string; 
}
const Image: React.FC<ImageProps> = ({ imageUrl, widthData }) => {
  return (
    <div>
      <img src={imageUrl} width={widthData} height="100%"/>
    </div>
  )
}

export default Image