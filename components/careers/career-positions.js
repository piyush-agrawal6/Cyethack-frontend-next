"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Briefcase, MapPin } from "lucide-react"
import ApplicationModal from "./ApplicationModal"
import { useDispatch, useSelector } from "react-redux"
import { fetchCareers } from "@/lib/store/slices/careerSlice"

export default function CareerPositions() {
  const dispatch = useDispatch()
  const { items: jobs, status } = useSelector((state) => state.careers)

  const [expandedTeams, setExpandedTeams] = useState({
    engineering: true,
    marketing: false,
    sales: false,
  })
  const [selectedJob, setSelectedJob] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCareers())
    }
  }, [status, dispatch])

  const toggleTeam = (team) => {
    setExpandedTeams((prev) => ({
      ...prev,
      [team]: !prev[team],
    }))
  }

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle)
    setIsModalOpen(true)
  }

  const JobCard = ({ title, type, location, description }) => (
    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{title}</h4>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {type}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
          </div>
        </div>
        <button
          onClick={() => handleApplyClick(title)}
          className="px-6 py-2 rounded-lg bg-gray-50 text-gray-900 font-medium border border-gray-200 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 whitespace-nowrap"
        >
          Apply Now
        </button>
      </div>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );

  const getTeamJobs = (teamName) => jobs.filter(job => job.team === teamName);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" id="job-openings">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Current Openings
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join our team and help shape the future of cybersecurity with innovative solutions and dedicated professionals.
        </p>
      </div>

      <div className="space-y-6">
        {/* Engineering Team */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <button
            className="w-full flex justify-between items-center p-6 md:p-8 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            onClick={() => toggleTeam("engineering")}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Engineering Team</h3>
                <p className="text-sm text-gray-500 mt-1">{getTeamJobs('Engineering').length} Open Positions</p>
              </div>
            </div>
            {expandedTeams.engineering ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
          </button>

          {expandedTeams.engineering && (
            <div className="p-6 md:p-8 space-y-6 border-t border-gray-200">
              {getTeamJobs('Engineering').map((job, idx) => (
                <JobCard key={idx} {...job} />
              ))}
              {getTeamJobs('Engineering').length === 0 && <p className="text-gray-500">No open positions.</p>}
            </div>
          )}
        </div>

        {/* Marketing Team */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <button
            className="w-full flex justify-between items-center p-6 md:p-8 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            onClick={() => toggleTeam("marketing")}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Marketing Team</h3>
                <p className="text-sm text-gray-500 mt-1">{getTeamJobs('Marketing').length} Open Positions</p>
              </div>
            </div>
            {expandedTeams.marketing ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
          </button>

          {expandedTeams.marketing && (
            <div className="p-6 md:p-8 space-y-6 border-t border-gray-200">
              {getTeamJobs('Marketing').map((job, idx) => (
                <JobCard key={idx} {...job} />
              ))}
              {getTeamJobs('Marketing').length === 0 && <p className="text-gray-500">No open positions.</p>}
            </div>
          )}
        </div>

        {/* Sales Team */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <button
            className="w-full flex justify-between items-center p-6 md:p-8 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            onClick={() => toggleTeam("sales")}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg text-green-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Sales Team</h3>
                <p className="text-sm text-gray-500 mt-1">{getTeamJobs('Sales').length} Open Positions</p>
              </div>
            </div>
            {expandedTeams.sales ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
          </button>

          {expandedTeams.sales && (
            <div className="p-6 md:p-8 space-y-6 border-t border-gray-200">
              {getTeamJobs('Sales').map((job, idx) => (
                <JobCard key={idx} {...job} />
              ))}
              {getTeamJobs('Sales').length === 0 && <p className="text-gray-500">No open positions.</p>}
            </div>
          )}
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob}
      />
    </div>
  )
}
