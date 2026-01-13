import './App.css'
import Box from './components/Box'
import Button from './components/button'
import Card from './components/Card'
import Layout from './components/Layout'
import ListItem from './components/ListItem'
import Modal from './components/Modal'
import StatusBadge from './components/StatusBadge'
import UserProfile from './components/UserProfile'
import Wrapper from './components/Wrapper'
import Tag from './components/Tag'
import DeleteButton from './components/DeleteButton'
function App() {
  // const user = {
  //   name: "Harry",
  //     role: "Magician",
  //     avatar:"link"
  // }


  //  const users = [{
  //     name: "Harry",
  //     role: "Magician",
  //     avatar:"link"
  //   },
  // {
  //     name: "Harry",
  //     role: "Magician",
  //     avatar:"link"
  //   },
  // {
  //     name: "Harry",
  //     role: "Magician",
  //     avatar:"link"
  //   }];

  // const menuItems = [
  //   {id:1,icon:"qqqqqqqqq",text:"TextQ"},
  //   {id:1,icon:"qqqqqqqqq",text:"TextQ"},
  //   {id:1,icon:"qqqqqqqqq",text:"TextQ"}
  // ];
  function handleDelete(){
    alert("Deleted")
  }
  return (
    <>
    {/* {users.map((user, index) => (
      <UserProfile key={index} {...users}/>
    ))} */}

    {/* <UserProfile name="Harry" role="magician" avatar="link"/>
    <UserProfile name="porsche" role="drift" avatar="http:jfj.jpg"/>
    <UserProfile name="koeingsegg" role="race" avatar="http:encjm.jpg"/> */}


    {/* <UserProfile {...users}/> */}

    {/* <StatusBadge isOnline="false"/>     string not boolean */}

    {/*<StatusBadge isOnline/>*/}  {/*OR  <StatusBadge isOnline={true}/>   */} 

    {/* <Button disabled={false}/> */}
{/* 
    <Box>
      <h2>Hello</h2>
      <p>Here is Children</p>
    </Box> */}


    {/* <Card title="BMW">
      <h1>Bayerische Motoren Werke</h1>
      <p>Bayerische Motoren Werke Aktiengesellschaft (BMW AG),[4] trading as BMW Group (commonly abbreviated to BMW (German pronunciation: [ˌbeːʔɛmˈveː] ⓘ), sometimes anglicised as Bavarian Motor Works), is a German multinational conglomerate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Germany. The moniker, "BMW ", first came into use when the German firm Rapp Motorenwerke changed its name to Bayerische Motoren Werke GmbH (BMW GmbH) in 1917. Thereafter, in 1922, the name and assets of BMW GmbH were transferred to the aircraft manufacturer Bayerische Flugzeugwerke AG (formerly Otto Flugmaschinenfabrik), thereby giving rise to the company known today as BMW AG.[5][6]</p>
      <Button />
      <p>Click the button for further details...</p>
    </Card> */}

   {/* <h1>My App</h1>
      <Modal isOpen={true}>
        <h2>Modal Title</h2>
        <p>This modal is always open.</p>
        <Button>Close</Button>
      </Modal> */}

      {/* <Modal isOpen={false}>
        <h2>Hidden Modal</h2>
      </Modal> */}

     {/* <Layout>
      <h1>Welcome to My App</h1>
      <p>This is the main content of the page</p>
      <img src='data:image/jpeg;base64,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'/>
     </Layout> */}

     {/* <Wrapper isAuthenticated={true}>
      <h1>Porsche</h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKSSzVawnSlLzVjcCV11Ocv6z4JDyocfD6A&s' />
      <p>The Porsche 911 model series (pronounced Nine Eleven or in German: Neunhundertelf, or colloquially Neunelfer) is a family of two-door, high performance rear-engine sports cars, introduced in September 1964 by Porsche of Stuttgart, Germany, and now in its eighth generation. All 911s have a rear-mounted flat-six engine, and usually 2+2 seating, except for special 2-seater variants. Originally, 911s had air-cooled engines, and torsion bar suspension, but the 911 has been continuously changed and improved across generations. Though the 911 core concept has remained largely unchanged,[1] water-cooled engines were introduced with the 996 series in 1998,[2][3] and front and rear suspension have been replaced by Porsche-specific MacPherson suspension up front, and independent multi-link rear suspension.</p>
     </Wrapper> */}
     
     {/* <Wrapper isAuthenticated={false}>
      <h1>Denied Part</h1>
     </Wrapper> */}

      {/* <div>
        <h1>Menu</h1>
      <ul>
        <ListItem  icon="qqqqqqqqqqq" text="textQ"/>
        <ListItem  icon="wwwwwwwwwww" text="textW"/>
        <ListItem  icon="eeeeeeeeeee" text="textE"/>
      </ul>
      </div> */}

      {/* <div>
        <h1>Menu</h1>
        <ul>
        {menuItems.map((item)=>(
          <ListItem key={item.id}
          icon ={item.icon}
          text = {item.text} />
        ))}
        </ul>
      </div> */}

      {/* <Tag type="success">Success</Tag>
      <Tag type="error">Error</Tag> */}

      <DeleteButton onDelete={handleDelete}/>
    </>
  );
}
export default App
 