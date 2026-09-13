import { CreateButton } from "@/components/refine-ui/buttons/create"
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb"
import { ListView } from "@/components/refine-ui/views/list-view"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DEPARTMENT_OPTIONS } from "@/constants"
import { Search } from "lucide-react"
import { useState } from "react"

const SubjectList = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  return (
    <ListView>
        <Breadcrumb />
        <h1 className='page-title'>Subject List</h1>

        <div className='intro-row'>
            <p>Quick access to subject information</p>
            <div className='action-row'>
                <div className="search-field">
                    <Search className="search-icon" />
                        <Input 
                            type="text"
                            placeholder="Search by name" 
                            className="pl-10 w-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by Department" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Departments</SelectItem>
                            {DEPARTMENT_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <CreateButton />
                </div>
            </div>
        </div>
    </ListView>
  )
}

export default SubjectList