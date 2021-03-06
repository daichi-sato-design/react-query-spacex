import Link from 'next/link'
import { VFC } from 'react'
import { useQueryRockets } from '../hooks/useQueryRockets'
import { Layout } from '../components/Layout'
import { RocketItem } from '../components/RocketItem'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

const Home: VFC = () => {
  const { status, data } = useQueryRockets()
  if (status === 'loading') return <Layout title="home">{'Loading...'}</Layout>
  if (status === 'error') return <Layout title="home">{'Error'}</Layout>
  return (
    <Layout title="home">
      <p className="my-5 text-blue-500 text-xl font-bold">
        Fetching by useQuery
      </p>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>

      <Link href="/read-cache" passHref>
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleRightIcon className="h-5 w-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}

export default Home
