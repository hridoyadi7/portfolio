import Bar from "../components/Bar"
import { languages, tools } from "../data"
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation} from '../animations'

const resume = () => {

    return (
        <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
            {/* //Education and Experience */}

            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
                        <p className="font-semibold">Institute of Engineering and Management,Kolkata(2018-2022)</p>
                        <p className="my-3"> I am currently pursuing B.tech in Computer Science Engineering
                                            from Institute of Engineering and Management,Kolkata</p>
                    </div>
                </motion.div>

                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Exprience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">R&D Intern</h5>
                        <p className="font-semibold">Hyland</p>
                        <p className="my-3"> Currently working</p>
                    </div>
                </motion.div>
            </div>

             {/* //Languages and tools */}

             <div className="grid gap-6 md:grid-cols-2">
                 <div>
                     <h5 className="my-3 text-2xl font-bold">Languages</h5>
                     <div className="my-2">

                         {
                             languages.map(language=><Bar data={language} key={language.name}/>)
                         }
                     </div>
                 </div>
                 <div>
                     <h5 className="my-3 text-2xl font-bold">Others</h5>
                     <div className="my-2">

                         {
                             tools.map(tool=>(<Bar data={tool} key={tool.name}/>))
                         }
                     </div>
                 </div>

             </div>
        </motion.div>
    )
}

export default resume
