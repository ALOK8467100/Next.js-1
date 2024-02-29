import Link from "next/link"

const LearnLink = () => {
    const id = 5
  return (
    <div>

    <Link href="/products">Go to products</Link>
    <br />
    <Link href={`/profile/${id}`}>Go to user Profile</Link>

    </div>
  )
}

export default LearnLink