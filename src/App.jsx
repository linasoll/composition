
import './App.css';
import Card from './components/card';
import Browser from './components/browser';

const contentNoImg = {
  title: "No Image",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor consequuntur soluta cumque incidunt. Possimus ullam molestias provident dolore repellendus libero quisquam magni earum amet repudiandae, voluptas ad aut veritatis recusandae!",
}

const contentWithImg = {
  title: "Have image",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor consequuntur soluta cumque incidunt. Possimus ullam molestias provident dolore repellendus libero quisquam magni earum amet repudiandae, voluptas ad aut veritatis recusandae!",
}

function App() {
  return (
    <>
    <h1>Карточки</h1>
    <div className='cards'>
      <Card props={contentNoImg} />
      <Card props={contentWithImg}>
        <img src='https://static.rozetked.me/imager/main/images/uploads/dwoilp3BVjlE.webp'></img>
      </Card>
      <Card props={contentNoImg} />
      <Card props={contentWithImg}>
        <img src='https://sever-press.ru/images/insecure/rs:fill-down:1920:1080/aHR0cHM6Ly84NTQyMjAuc2VsY2RuLnJ1L3lhbWFsbmV3cy84NzdhZTY1Zi00MTcud2VicA.webp'></img>
      </Card>
    </div>

    <h1>Декомпозиция</h1>
    <Browser></Browser>
    </>
  );
}

export default App;
