

const portfolioInfo = [
    {
        id: 1,
        name: 'Seraph Station',
        date: 'September 2019',
        vite: 'seraph2'
    },
    {
        id: 2,
        name: 'Eebox Building',
        date: 'August 2017',
        vite: 'eebox'
    },
    {
        id: 3,
        name: 'Federa II Tower',
        date: 'March 2017',
        vite: 'fed2'
    },
    {
        id: 4,
        name: 'Project Del Sol',
        date: 'January 2016',
        vite: 'del2'
    },
    {
        id: 5,
        name: 'Le Prototype',
        date: 'October 2015',
        vite: 'proto2'
    },
    {
        id: 6,
        name: '228B Tower',
        date: 'October 2019',
        vite: 'twotwo'
    },
    {
        id: 7,
        name: 'Grand Edelweiss Hotel',
        date: 'December 2013',
        vite: 'grand-ed'
    },
    {
        id: 8,
        name: 'Netcry Tower',
        date: 'August 2012',
        vite: 'netcry'
    },
    {
        id: 9,
        name: 'Hypers',
        date: 'January 2012',
        vite: 'hypers'
    },
    {
        id: 10,
        name: 'SXIV Tower',
        date: 'March 2011',
        vite: 'sxiv'
    },
    {
        id: 11,
        name: 'Trinity Bank Tower',
        date: 'September 2010',
        vite: 'trinity2'
    },
    {
        id: 12,
        name: 'Project Paramour',
        date: 'February 2008',
        vite: 'pp2'
    },
]

const Portfolio = () => {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 ">
        {
            portfolioInfo.map(portfolio => (
                <div key={portfolio.id} className={`${portfolio.vite} w-full h-[40rem] flex flex-col justify-end p-2 text-xl text-white font-medium`}>
                    <div>
                        <p>
                        {portfolio.name}
                        </p>
                        <p>
                            {portfolio.date}
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Portfolio