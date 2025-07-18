import { ArrowLeft, CircleQuestionMark } from "lucide-react"
import { Link } from "react-router-dom"
export const NotFound = () => {
    return (
        <div className="card p-6 mt-4 h-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
                 <div className="flex space-x-2 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
                    <CircleQuestionMark className="text-indigo-500" size={24} />
                </div> Sorry, Page Not Found!
            </h1>
            <Link to={'/'} className="flex space-x-2 items-center text-blue-500 hover:text-blue-700 transition-all duration-300">
                <ArrowLeft /> <span>Go back home.</span>
            </Link>
        </div>
    )
}