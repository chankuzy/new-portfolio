import { Code2Icon, Cpu, Database, Server, Smartphone } from "lucide-react"

export const IconsUsed = () => {
    return (
        <div className="flex flex-wrap space-x-2 mb-4">
            <div className="flex items-center mb-4">
                <div className="flex space-x-2 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
                    <Code2Icon className="text-indigo-500" size={24} />
                </div>
                <div className="flex space-x-2 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
                    <Database className="text-indigo-500" size={24} />
                </div>
                <div className="flex space-x-2 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
                    <Server className="text-indigo-500" size={24} />
                </div>
                <div className="flex space-x-2 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
                    <Smartphone className="text-indigo-500" size={24} />
                </div>
                <div className="flex space-x-2 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
                    <Cpu className="text-indigo-500" size={24} />
                </div>
            </div>
            <h2 className="text-xl font-semibold">Stack/Technologies used</h2>
        </div>
    )
}