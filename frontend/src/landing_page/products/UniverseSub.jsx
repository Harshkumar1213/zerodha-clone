export default function UniverseSub({img,univDes}) {
    return ( 
        <div class="col imgs">
            <img src={img} alt="" />
            <p>{univDes}</p>
          </div>
     );
};