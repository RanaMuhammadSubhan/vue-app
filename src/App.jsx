import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Hi I am React Developer</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero hic odio recusandae explicabo eum provident natus a, voluptas, dolores inventore enim perspiciatis iure debitis. Impedit qui nemo suscipit, labore inventore totam. Omnis odit quidem voluptatum nisi quis repudiandae vel molestiae, iure natus eligendi voluptates quisquam eaque quasi ullam nostrum officia a id aut excepturi pariatur alias architecto impedit distinctio? Excepturi ipsum esse est necessitatibus itaque ullam temporibus a illo consectetur tempora perspiciatis ducimus beatae, quas hic sequi omnis explicabo eveniet dolor doloribus cupiditate recusandae inventore molestias. Dolor odio, dignissimos tempore sint ullam totam magnam? Distinctio, quam eaque! Nisi minus eos mollitia, delectus voluptates voluptas doloribus fuga aperiam omnis ad odit repellat neque nostrum quaerat aliquid veritatis pariatur quia fugiat. Quam fugit libero nesciunt quaerat quos tempore cupiditate, dolores sapiente voluptas maxime reprehenderit sequi cum ipsa corporis ullam, rerum nostrum ea et repellendus porro soluta dolorem, doloribus non. Saepe eius atque tenetur doloribus quisquam enim! Aliquid eligendi nihil at rem iste similique tenetur illum reprehenderit a vitae omnis quaerat aut laboriosam harum et ex, vel eum quia veniam aspernatur? Quod in eaque harum repudiandae accusamus nesciunt, nulla delectus est, quidem saepe reiciendis. Suscipit aliquam explicabo quae deserunt nulla consequuntur quasi sapiente consectetur, cumque, nemo a debitis. Dolorum, beatae vel obcaecati porro dolor consequatur rem veritatis nobis in deleniti! Possimus recusandae non, aliquam minima officia doloremque ex laudantium. Eveniet quod accusantium perspiciatis, perferendis quo, sapiente quibusdam magnam suscipit odio, repudiandae numquam nulla. Ut, fuga obcaecati. Voluptates veniam incidunt placeat ipsam beatae quis adipisci distinctio nulla ipsa hic! Velit architecto ut explicabo minima aspernatur iste eius repellendus maxime fugit, voluptate repellat facere aliquam cupiditate tempore laudantium quam possimus sapiente corrupti incidunt modi. Nulla possimus at quidem facilis ullam! Vero laboriosam, veritatis rem quibusdam beatae eius optio. Incidunt necessitatibus alias quisquam reprehenderit. Magnam libero dolore omnis voluptate id temporibus eligendi totam sapiente officia. Sapiente quia ut, architecto rerum ex alias. Maxime consequuntur temporibus sint error excepturi illo modi sunt cupiditate repellat eaque, ipsam mollitia saepe porro, omnis deserunt et cumque ipsum possimus optio earum expedita in! Molestias sed laudantium recusandae vitae magni iure corporis id, necessitatibus perferendis praesentium mollitia illo amet, officia deserunt fugiat voluptatum itaque ipsa sequi. Nobis error nemo blanditiis possimus laudantium debitis quia? Maiores ipsa, dolore optio fuga beatae quos amet. Commodi, recusandae ipsam eius reprehenderit obcaecati magni incidunt nobis perferendis adipisci explicabo blanditiis maxime. Ab, expedita? Aliquam omnis quia dignissimos?</p>
    </>
  )
}

export default App
