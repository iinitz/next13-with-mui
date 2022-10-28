import Link from 'next/link'

const HomePage = () => (
  <>
    <h1 className="text-3xl font-bold underline">Hello World!</h1>
    <Link href="/admin">Admin</Link>
    <Link href="/task">Task</Link>
  </>
)

export default HomePage
