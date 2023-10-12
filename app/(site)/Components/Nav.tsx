import React from 'react'

const Nav = () => {
    return(
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex bg-white py-4'>
                <div>
                    <span>
                    

                    </span>
                    Jacob Tornes
                </div>

            </div>
        </div>
    )
}

export default Nav





{/* <header className="flex items-center justify-between">
  <Link
    href="/"
    className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
        bg-clip-text text-transparent text-lg font-bold"
  >
    Home
  </Link>

  <div className="flex items-center gap-5 text-sm text-gray-600">
    {pages.map((page) => (
      <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
        {page.title}
      </Link>
    ))}
  </div>
</header>; */}
