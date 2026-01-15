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
import Button2 from './components/Button2'
import USerCard from './components/Usercard'
import UserDefault from './components/UserDefault'
import Confirm from './components/Confirm'
import Cancel from './components/Cancel'
import ProductCard from './components/ProductCard'
import Dashboard from './components/Dashboard'
import Card2 from './components/Card2'
import CardHeader from './components/CardHeader'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'
// import { useState } from 'react';
import Toggle from './components/Toggle'
import FallBack from './components/Fallback'
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
  // function handleDelete(){
  //   alert("Deleted")
  // }

  // const[isOn,setIsOn] = useState(false);
  return (
    <>

    {/* <Toggle  isOn={isOn} onToggle={() => setIsOn(!isOn)}/> */}




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
      <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSExMVFhUVFRUVFhUYFxgWFhUVFRUYGBUVFRYYHSggGBolHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUyLS0vLS0tLy0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYHAQj/xABJEAABAwIDBAYGBQgJBAMAAAABAAIRAyEEEjEFE0FRBiIyYXGBQpGhscHwByNSstEUU3KCksLS8RUkM0Nic6Kz4RaTo+JEVGP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEDAwMDBAMAAAAAAAAAAQIREgMhMQQTUSJBYTKR0RRxobEjgfD/2gAMAwEAAhEDEQA/ALvBjqN/Rb7kU1vU8vghMMeq3wb7kax3V8vguVSKlAmoUoezxP3XKy3aEwwmozxP3XK13a6tGXpOTXj6gXdpbtFbtLdrXIxxBd2lu0Xu0t2jIMQTdpbpGbtLdoyDED3SW7Rm7S3aMgxA92lu0Xu17u0ZBiB7tLdozdpbtGQYgm7Xm7RmRLdoyDED3a93aL3aW7RkGIJu0t2i92lu0ZBiCbtLdovdpbtGQYgm7S3aL3aW7RkGIJu0t2i92lu0ZBiCbtLdorIocRXYyx1gnwAFyTwCTmkrZUdNydJERYqnGbVE7ulDnnidB5Wk2NraSg8fjH1SM5yU80ZLgkgjUxHydIKExeNoMhoIYXQLXkESA6L3tJOvkFy6nU+0Tv0ehXMx1TazwRmaAB1Qcwl2YgZiOJt7T5MpVWGo8DqkDM+Gie/rRMmdRGiqTQqVaoyRu2uDiJkmDYZiTqRGtrlFDI1xY0F7i5xdAEOhpdJvlB0tw15rik0elFVsGV8UJy08t/WXTYun0RBPegNoYlrRlc/k0AkdomA95ERJEnwVbisTVfUpGn1mAVAQD1s9Sk8NB5GYEDRWVDoo80gx76eZxeBkbJaAQXdc6OkN4filSVWx2P2OGjFCnlJLAYcbtuzWnfQjjF5VJ9ITf6y3/Kb9562+ytkspZajjnrOaA6oQMxtpJ0sALRposd9Irf603/Kb9566emZwdX9RqcP2G+A9wRY0Hh8EOzRvgPcEUxvVHh8FjkbYlhs8fWs8T9xyvd2qXZjfrmeLvuOWkyLs0H6Th14+oG3aW7RORLItbMMQbdr3dojIlkRY8Qfdr3Ip8iWRFhQPkSyIjIllRYUD5Et2p8qWVFhRBkSyKfKllRYqIMiWRT5UsqLCiDIlkU+VLKix0QZEsinypZU7CiDIlkU+VLKlYUQZEsinypZUWFEGRLIp8qWVFioCxTsjHPjstJjnAlZvEUHVGPvfNmBnXQFok97fDNC0O18Yym0tIkua6B3Rcnu96qWvZlm1m3JtEROluA9S5Oplwjv6SFJuik23QAw9TEZc7wQJBiLMDHHlIIMdw5rM4DCCq4TfUBrQDUdGgbMC/qsujVcC0sLMjI3m8OYkNeSSOsBd0NgQbaclS9HdlBtapXc9piWjK3K0Od2i2eAaQOHa8Fy+x3KQ6ps17KQMANZ1chdxf1coLQBInWDc66qpweF67nmQA5oBcTlk2bkaZcSc0G19JWyx7mmnlBIEtEzzLbkoPYVLC1OsyQQ2HxfVxcAHZTNwbTa3cpSDLazMVcHU37GsYXNY5rnPsGsIe7qHy5cRZahlFwaXkBrnPLyDByg0wwtaZE3DTPeVYV8IxtN5AkucXEnvGU28EPX3TabXVSA1sOucrRFh4R8Ahv2FdgzQ0NAkTMAA8vDSywH0ij+st/ym/feuhNr0ard6xgOYDLUy9oA+i4i410WA+kETiW/5TfvPXT0xxdTyaym7qgdw9ymabD54IRrrDwHuRLdB4LlTO1ottlD6+n4u+45afIsY3aNPDubWquLWMd1nATAcC3TiJI0vyutjgcbSrMFSk9tRjtHNIIPO449y7+n+k87qF6h+VeZVLCULcwIsq8yqWEoQBFC8hR1sWwaEOPIEe0qFu1KUkGRGtpHsRYUEwvYT6ZDhLSCOYunZEWFEMJQnue0GC4A8pUL8ZSBAziT6vMphQ6EoXpqsmMzZ5SEq1ZjdT5cfUlYUKEoTqTmu0Mp0CY46xxhFiojhKFIWpZUwoihLKpMqUIAjypZVJlSIQFEcL3Kkareac0g6EIsKPIScIE8lIGrNdJtv06YNNpJ1zOHCxgcjfvUylSsuEHJ0V2MxGeo5z7mLN1ytHAcB/ys30krPeylklmaoGOIOjjoNB42/ncU9pAkVWODuq3QEiSQHiBHEaXQ2AoU8RUe50tNGoyoW6XLYZJ0mWkwBY2Xnt72z1IqkajdBzYINywEHvcBJg8pJ8CEDscgNqvLMralY5YsBSpMytsNBANubgs3s7pc51R2Hq/VuqVGtY5sdQkhoZBkwftXN/VptvYDNRFHNYvbvXud2abTmfJ5mAA3jPIEhNNbMDzGt31ItLC1tRwaA7tZC8AvLT2TEkA3EC3BXFCk1rQAAIGVoGgA4ADQWVJS2m2u+mWdktc7wyvYI8esrskkKAfBFi3dVwkTlMe5Z3ZuFp401BXzPFF+7yZvqgQA4wBGY3gk940VrtynULGinAcTlLj6IJGYzzAk+K92Js6nhabspvUeajidSSAPcJ8SUD4QRjaTG04a0DLlA7gCBA5cly3p/U/rLf8AKb9566Vtiv8AVEzoR7SFx7pvjM2IB5UwP9Tl1dNucuuvJuG1BA8PgjBWGUeHwVE6qpRiLLkO5qzzpXiScJUH6H+41EfRP0kw+Hp1aFWoWl9QPYMrnNPVDXRlBIdYa8AFT9Ja04V/6n32rIbPrFtRjwSCHNIPmu/pV/jf7nF1K9dH0xhNo0av9nUa7mAQSPEahOxGMYzU35fjyXFaOLdmmTOs8fGVd1GV2DeVCZMQAZcSdJPAea3exyqF8G/ftgmQ0AEcdUBicZmBJcSQDroPDhqsM/alYWL3N8ZPmoau2a5EF2bvi/rEJYtlKkaNuOyuaTPHSDaI+CJqVocRNngcNCLxHh+CydPaZIOZt9JvPjYo3B4g1bS9xHBrZIEakmwGgTl5Y4+EXjca4AlhcIiYMA3sYU1LalRzXTUdNjcm44i3kqavTcB1Os4i4JHVkch2jrx4cUDszEVHvy5oEQ5x0bawJNuEQlkmgwaZr6B3jXXuXDXgeI9YCrRVIBaZm4I5EaXSbiHBzWuNwSGkSKbnxMEC4tGvJTOrAsmrMzYaXnheINtDGqzWpRo9IKaRUYDJLgL8NBfVD1REkVARzvry8VBjdpg025GEtzZTMtkgWaOcgu87rP8AS/pG3C1BRoNLqhEFxJ9I9mB2jw+KuGTdIz1FGKtmhZincHeo8tD3InD1nRMusbkTI7wVy7E7c2qSRu3N7gyI8yUL+XbVcfSEcywLbD5Rh3PhnccBtaqe1BE6m3qUjtqOBlomeB945L55xXSPGU3FrqpkGDBafcEXg9r7SqNzMeSNO1T4eSHpVvaEtRcYn0Iza7bZ2lvfqB48UScWyJF/BfPbdu7VZ9s/sH3I7CdNsdSLXVqZyNcCSWEayIzTZT237NBnH3TO4Oxx+zHehK+KOvdKq+ju1mYqgKwJh3om+UjUGArHcM9nM258VzynTpnXHTTVojNeYPH5m3cvN86QY9XvlKvgGPbEkRoWmCI5FV+LFGkIqVqlhIBsT5tF1K1C3plmcfVEgOPqmOdz3FZLa7HVKjAwtgy57zBytENaGzYkmYibhDYjbx4E6mAbmCCJnTSJBOpCBqbSqE5BPWaBEEHK2SJ1jXvmfIZTybNtOMUtgzAUC2o5tMEUaRlz+GfKHZbdqcw/ZM8JG2ljBToV303X3oc5sdV2dzYN5tmc+J1uRwij2liMSx4eAYZDuzADgIzHNZxNtBwGsJmzdoBwqMhxa+iAW8N43OXaeh1syS03yU5rgl6DYdtbGGrUdLqbXVgHdlzgQ0Zj3ZgfELQ9NdrinR3YeBfnBcQTmJ53OY+fnhcDjX4Yvdl6zwGUzmAbBMuDhreGwQRBavMMzesO8dLxMZjduYxxgm4JiYHdJVzhcrfBMZe3uCYLa1VlankeYDswE2kGdNF27C7XljHFvaaCIMRaYsuQYrZLSwkNMtYHCOqGmxJc6B6Jm5tBV/sfbOWg3eVhlaHASbmA2GibwIItOpjRTrepJxHBU2pHRTtBhadJBm+sSIATqTsrcsagcI9Hh5BcyxnSysxjnsc5xiJDctOCNYIkxqpW9PqrKVNkN3gcA97xIygkGJcCY0seB0WPam+C3KKNjt6sQxwPDL95cg6STvr8v3nK+dtn8prvqFt2kQ7MMt2gOyt19U8PFUfSN01R+gPe5dnTQcdmcvUtNWjYVdSvQvCw+we5Fsw9p7lw2dxT9IJ/Jn/qffashQcZECTIgDUmdB4radJaX9WqAX7Gn6bVhi0t1BaeHDTkvQ6TeD/c4epfr/0fQWG6P02Dq5hzh0T3nKAjG7PbEEZgDIzEuv8ArLkXRf6RcTRqtGJqOrUYIIIaajbWc15gkzE5jpK3tH6R8G4dmtf/AAs/jUy052EZxrYv6mzmOs5rSNbtkz4pM2TRnsNtpZUrenmE/wD0/YH4pzOnmDJ1eBzLPfBKjGZWSLobJo/m2D9QL12yqZ5i/AkDSNAVVt6a4L84f+2/8F4em+C+27yY74iyMZeGFotG7LYDMDzF45aqVuCpgQGtA7hHuVS3ptgY/tD5sf8AAL1vS/Bfn/W2p/Ck4y8BkiwbsqkDIZB8SffKrNsdI9mYYllevSDh2mdt47ixgLvYp6XSnCONqwsCT1XgADUkltly7HYjY9TEVM9Co/PVdUzud1QXGSPq4flmbEu1WmnpZfVZnqauOyOtMq0H4cVWhrqTmB7OrYgiWnK4WtwIXEOkhrPxoqMpPqBr2OIa0mcrpi3gtHXo0Xs+rrYlrY6opYl4YO4DNFl50W2bXfRq1DXDnCqA3eVqT4Y0anftcASZu1vmYW8I9pNnPKXdZh9r4DHYiq6q7D17nqjd1CGt4AdX5KssDj8fSpim7D1XZbZnNqAxwB6h0WhxWDxn/wBrCN8KlH92iFS1tl4gSfyvD3JJirxJkmzFpakqaJUador69d7zLsCCTxLXyf8AxqWltGswZW4QtHIB4H+2lUwmIH/y6fk9x/dQlWjW44of6j+6iov2/sW/n+vyB7XGIrvzGk8AAANh5A5+iLypKWLqtwz8O9jzJBYTbKA4GL8Le1ImoP79h8aeb3sKZ+VVPzlP/tx7mBX7VQq35/77nRvoi2rlBoO9ImO4j8Vttr9LMBhaoo16wp1HNzBpa9wykkAlzWkNmDqQuDYINqVBnqPHPI9wHCInRbjdbLyDftqVjAA3lV5fbTK8EOHrXPqaOcsmbw1cFijquCx1CszeUqlOowz1mOa4W1FuPcsl0rxGelTrTFntdNoIcQBHkVXdC9r7NoB2FpsdRbWeXEvfnaXODW5S83aOqNZ1N1sXbBwxGQ0mubyJLhckmx7zOi5JR7cjqhJSVnL8c9pY0itmJgloBd3wCBa8aqI1arWksJYTBM2LrWg/Oq6zT2dRbZtJgA0hogeAUjsDTt1GeoT5Ier8FKJx803TYve4g3MkwbmBeydhNgYloD4cMwMANdmAJkA6NBMTEk+a7Cyi3hC8OFBMn55dynuNcDaTOOu6J4kmRRqum4zw0+omy0Gwei7qFPPVpTUdJLRDyLmGi9rRJ/BdDFIJu6HzKmWpKSocUk7MR0h2diqlF1GjSy5olxcxggEE8Z4FZNvQ51MF9V9Q1ADkbSYXjMCe28giD4Lse7HcvX0ZGgN+UpQm4qkOVSds4a4YoGKeGqsgZZy1HvM6kPcLA8mhvxQVXZGLcJNCoGi39k4a8ZIniV340xoNV4Kfzf8AFarXrhGbhfLOGYDZVam4PdSqNA9IsLRcEXMX8T3c0N0gd9b+qPeV2DpmAMJUtxp/7jVx3bpmp+qPeVvozc5WZa0cYUdYoMAaLDQcO5Qlkjy+CgpbTaAByA9yKGIGSR9n4Ly2dxU7fAbQf+r94LJy0i4ketajbmKY+i5rZJdlgcbOB0HgqHD7FxLuzSf5jL96F39K0oO/Jza6uRXu2fRPox4W9gTTs+NHERpIBWpwnRKu7tPY31uPqiPar7BdCKWr6jndwIaPifatnrxXuY9v4Of7xw4T3rzOZ0Ps+BXVG9FMHpuh+2/+JenolgvzLf2n/wASn9THww7TOWtqwpqNel6bnAf4Wgn2kR7V0r/pHA/mW/tv/iUNTovgR/cj9up/En+oj4YdtmGw9bBOEudXbyyinUEd8lqkIwX56uPGgw+6std/07s8f3P+p/8AEvB0a2fMinf9J4/eup70fkeD+Dnu3KrWkMo1XOY4AvLmbsyCYbGZ0jjrxQeGdid4TQlrdGwKc3ABnMJ58Ve9Ldn06dV27AbTa1k3MSRzPE8u5Lozi2sqCGjRvaGswQY8CF0ZeizCvWF7PftswPyiqwczZo8cjpQmM2jtkE5sTXE8n1QBfhFaV0p/SpjGRkYYtoFj9u9On+jSpax1mAj2Qsots2cv2+yMnU2rtXPDq+JLZEubXxFhxIaa8kjkYleHaWNId9di5HZBr4iXW4xXIbfvPwRruk+JqTlo4eAJJLCNVJhsbjKtNlRtLDAVHFrBldmLgSDIaDA6pM6Qtcdrr+TPuSTq/wCEVZ2hiZAdXxAEdYmrXseQG/uNb28EM/GYggfW1pmCN9Xs2T1p3t/BWzqmLcA7d0CHF4BFOoZNPNn0ZwyO8YHMJtWnXaJcyiBk3nZf2bxYNmbHq620QlETnP4+y/BSur1jml9WwEA1K3WMXB+ttBtxQpfVMzm7uvVM/wDkWnrYCs1lR7m0opGHw1xg2MCSM3aGnfyVLTq5yTlaB3A/itFj7Ety4dfZfgrXZ/5l/wDGpKeJrDQkebvi9F12A6CFHRwxLXEejE+c8PnVDonKXx9iAPOU5iS6Wxp2YdmmO/J7V3D6P8e6vgaL3klzQ6meM7txDTznLlXDn0ybBdK+ivFVBhKjQ6Mtd3LjTplY9RG4GmhKpnSvWm+Z+fJVJxVX7fsH4Lxld8/2vsb+C4KOyy3CUqrdinD+9HqCCrbUI/vneTG/gUqCzQGF4DCzjduiL1HebR8Gpv8A1M0Ccw82kpFUzSA8BwXkeCpsN0jouF3NPgCPeSpn9IsMNXRPcT7krHTLQBeFvzKqW9JMKTAeZ/Qd+CIG2qHM/slDaCmVfT3q4GqRGtL/AHWLim0qsv8AIe8rrvTratJ+DqMDpcTTgZSNKjSbnuC47tE9byHvK7Olqjm6i0jVNxpPsVl/SpDABPZA9izrH6eA9yKYKh0B04iLLllBHamXHRg1HYmn+t9xy3X5LXJ9H581jOiTKoxNOSPStAnsOXQA2p9r3KXyZTe57hcKR2oRrWAKKkH96Lp5laiYuRA4FRODvkI9xhDvqnmqxFkBua5Q1A5FvqHmoXO71VE2AvYePuTRTRb3d68HeUxWcf8ApNEYsSYlrD6muAty0VfsyvVmWVKIPJweB6gFb/SfhH1MY57YLadOlmuARmzwY49lY6g52YFhbmF25i3LI55+rz1su2KUoIyycZcGyBxQYXOex7pAaykDEcXPc6O4AAczIiDBT2TXru63U/SbUdJ7hTY4n1KhficXqXYYuIIMtwZgfpFsX7iTziyfhNpOwzqlZhbvcm7Y9ga0Ne9sOewMAFutBAiQCjAMzU08Lh6QLTiW5puN1XGnC7AfYpaO1aLKTaW9Y4MdnE06jZObMJA5HlBsufjA13wXF0uvLiSTJiTPfOqYdn1In5t/NXjtVmeW90dCZt1oMirTNni4qkQ8y4XFrxp9kcksTt1rxGaj/Z7qQKwOQ6iY14TwkxElYb+jnsbndduY05162o9YB9RQ7cM90kTEpLTiPNm2x+3C9j2OqM+sjMevwgCJHcPUs+MUxhjMCOfD8VVnAVOfCde6Uw4WpI4z8wqUUhZO7Letjac2cEM3aDgXZXMgiLzMIKoLQA2ZBkhtwRpLuUe1MAdI7EWnsDx0Rih2wp+Mcc2kcxK6t9FA/qlRx9KtMnj9RRn2yuQPLQDfh5nyXZ/oxpZMGWkz9a4GNJYymxwv3tKx1vpLhzZrHNHL2Lzdjl7FI0hTtaCuVGrZW1qAPL1KpxOC7/eFpjRnghcRhxyQwT3MtUYRN/eq+s02ur7EYZ8kkCPFCbhxcBbLOshc0nudsOCto0yBzXj+C0Ttnty9sKOlsuk4CXtB8/elkiqZQgiUaI7kdiNlUGx9Yb/PJP8A6OoxO88vkJNgZXpJ/Ym/FvfxCwuLouLpEGy6N0mwdMUSQ46i3mudbQ6roB4c13dLwcXVcmlw4a1ohvAe5Gtxwy3B7MWsqhlWwuvTWEarB6d8nT3KN10OxTDiGC+jvulb/O2f5LkXRCpOIaA7UH3LoJDvte1JRx2MdSeTsvHVAozXjmqoVP8AF7Qk6t/jCtIybLE4od6Hq4sd6rqjifSb6wg6ruAd/qEDxKqiciyqYoayoTiZ5ge0/h86KvFDm+TzkewcEjhx9r2p0TZZCq1eh7OZVc2j3j1qdmGHP2hFBZzb6TalSnjQ9jnNbUw7QYMZstR8i+sdU+ax1THOmYaT3spn3thb/wClfC9SgRrmfxmwA/FcxcCOK7NJJqzOUnwGjaTx6NLzo0j+4vDXe8gy1pGmVoZfn1QEFdPpvIWrXghPyH06lQ61Xe0/FJznfnXeo/ihG1TyXpqO5KaZWwSX1CMu9JbIdBmJAMGJ1AJv3lJjni28I8B/yhmucl1kAF9Y/wB6fV/7KEufpnPz5pjQ5LKUBQ78rLQBlpuji5gJ9fFMOOP2Kf7DfwUVRt1HCrFE5NBbNoOGga3vaMp9bYXZPozdl2dSMdp1V2h41XR7AFxBrSSu8/R3WaMBRDyJDY8gSPgsOoSUdjSEm3uaOniu5THHN5HxQ1TE0RxahKmIpn0m+tctGtlr/S4A7PnHvHBA4naHd7D+CG3tLm1B1nAdlzfDh/wjEMh1fFMOvxTGYqmL5ZjxQFdwPpNB5Ej2c0ynSPBzfWFnKCNoajotau0WuEZT7fwUAxVNrZId3XNzw4IOpQf9tv7QTfyB7heo2B/iBUdtGncZDW2gD2pPrUZ2lykJ1TAtHpAphwLfte74oxiUpsrNtY3NTIMrGYqC6YWv21h4aYv5rJV2Xuuvp6o5eo3ZaU3jKE9jgq6nUsnteU3AO4bLoUwHFsPIO+6R8V0p9SOC5L0NrxiGmefuXR34s9yzcdyXIJq1WoGvXaOPz3DihauJJ7MHv4D8fL1hQjmTJ5n5smkZtk7qhOpgchr5nh5etOaLWgBD+acHxaU6FZNmheir4qCT3L3eRxCKCwkPKkZUcEHvCVI2eYRQWZf6SjNOnPN3wXKqouur9P2fVMPj8FzF9EzoujS2RL3IGUAVLTwwujsNhzCnoYMumOAJsCdEOZooFKacFOyIz8ie42B9ylGyavIetDmlywxK4MSyKybsaudGyiaXRXGu0ou87e9Hcj5HiUmVLKr9nRavfO6myOBfmPqbKrcVgzTMFwPghTT4YnErKjUwNU9ReNatkzFrcmwNO6630WMYZg8feuWYJlwumbBJ3LRKw1ty4l2R3rzIENmPML1teOKwoYSKKaWKNuMHFNqYhp5pgKrh2kXIUQZl5H3j8UngnSfWvfyZ/wAlSzSNkdV5PpT4KFte8EnyJUWKou1mD86oQVHDX+fmlRaLSviREAG3GUDVxjuEjzKFrYl2iDc9yWBeQ7amKcWmSfWstWqCVb40khU7mXW+lGkY6srYxr05tVDhSNWtEWXew6+WoHLZ08QXDrG32QfvHj4aeKw+zNVpKLrLKSJsvW4gJwqhVDHKZrgpoRab0L0PCr2v708VBzTAPzhINlA73vS33egCzps7/apWAc1VCt3p7KpPFICDpiKZpNl2hPBc8r06U6uPktr0mP1Y8Vhq5urgh2XWz6dMNnIT6kThcYGmBTEQRc8x4IXBVjuh4lV1esZ1WL07bs6lKkiU4oA3DR5k+5TU9r02XFME8yIWeqPumSteymZ5Gmd0uqtBDBTZ3hoJ/wBUoLE9J8Q/tVHH2ewKkIXmVNaMF7A5MOrbVqu1c71lDveTqoYUjQtFFLgggc1PZTTwxE0aauyGSYKnddE2HamAsZgKYkLY7OcA0LHUEixe5Q7wLxzwmZgsxjzUCjNVqUBNIanQWePxsaSoTjz3ryoByCjIHcporIT8UT/NDVKs6p76ngh3PTUR5DHW0nw/BNmdE4vUboPG/NOhqQLjG2VO6Va4mqRrB71VPN1pBEyYIF6CvUlZFlpsZ3WC11NqSSiRLZMCntckklQWPLgvc4SSQB4XhN3gSSRQHra6eK6SSKAA2xUzNhZevSvovElURoLoOAZCrcQkkpS3NstgB1JN3aSS0FY0000U0kkBZ7u1I1iSSCbH06aOoUkkkEllhWgLQYSsAEklEhE+8lRuKSSQrGZzzTg5JJMQ0lMc5JJAWRFyY5gK8SRQ7GGimHDJJIoeTK7aVDK2Vn3VbpJKood2f//Z'/>
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

      {/* <DeleteButton onDelete={handleDelete}/> */}

      {/* <Button2 variant="primary">Save</Button2>
      <Button2 variant="secondary">Cancel</Button2> */}

      {/* <input placeholder='Enter something...' type="text" className='InputField' required/> */}

      {/* <USerCard name="harry"/> */}

      {/* <UserDefault name="harry" role="custom"/> */}
      {/* <UserDefault /> */}

      {/* <Confirm />
      <Cancel /> */}

      {/* <ProductCard name="Porsche" price={`2 Crore`} image="data:image/jpeg;base64,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"> 
        <button>Add to Cart</button>
        <button>WishList</button>
        <button>Buy</button>
      </ProductCard> */}

      {/* <Dashboard title="Chart">
        <h1>Sales Overview</h1>
        <p>Chart goes here...</p>
      </Dashboard> */}

      {/* <Dashboard title="Stats">
        <h2>Total Users</h2>
        <p>1245,9934</p>
      </Dashboard> */}

   {/* <Card2>
    <CardHeader>
      <h2>Product Details</h2>
    </CardHeader>
    <CardBody>
      <h1>BMW M5</h1>
      <p>Price : 2 Crore</p>
    </CardBody>
    <CardFooter>
      <button>Buy</button>
      <button>Add to Cart</button>
    </CardFooter>
   </Card2> */}
{/* 
    <FallBack errorMsg="Failed to load Data">
      <h1>Dashboard Loaded</h1>
    </FallBack>

    <FallBack errorMsg="">
      <h1>Dashboard Loaded</h1>
    </FallBack> */}

    </>
  );
}
export default App
 