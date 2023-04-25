import ProfileCard from "./ProfileCard";
import './App.css';
function App() {
  function handleClick(name){
    alert(name)
  }
  return (
    <div className="app">
      
      <ProfileCard
    src="https://cdn.w600.comps.canstockphoto.com/professional-headshot-stock-photograph_csp24834199.jpg"
        designation="UI /UX DESIGNER"
        name="Shubham Jadhav"
        jobdescr="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, error voluptas ullam soluta a excepturi nam modi eum quam incidunt!"
        btn="see more "
        externalClassname='externalCss'
        imgstyle='imgStyle'
        Name='name'
        Designation='designation'
        Des='des'
        Btn='btn'
        onClick={() => handleClick("Shubham Jadhav")}


      />
      <ProfileCard
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9C7Q7Sbw76HRwcWHTFskTlLQKeE85QPdZbUoO2TjeNg&usqp=CAU&ec=48600112"
        designation="Backend Developer"
        name="Shekhar Singh"
        jobdescr="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, error voluptas ullam soluta a excepturi nam modi eum quam incidunt!"
        btn="see more"
        externalClassname='externalCss'
        Name='name'
        Designation='designation'
        Des='des'
        Btn='btn'
        onClick={() => handleClick("Shekhar Singh")}
        

      />
      <ProfileCard
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0h_oohkFpPnkGiGudMC6Zw3DIPWsC03dabNsTOBV4eg&usqp=CAU&ec=48600112"
        designation="Full Stack Developer"
        name="Ashish Khankari"
        jobdescr="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, error voluptas ullam soluta a excepturi nam modi eum quam incidunt!"
        btn="see more"
        externalClassname='externalCss'
        Name='name'
        Designation='designation'
        Des='des'
        Btn='btn'
        onClick={() => handleClick("Ashish Khankari")}

      />
    </div>
  );
}

export default App;
