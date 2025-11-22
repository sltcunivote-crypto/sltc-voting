"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestDBPage() {
  const [status, setStatus] = useState("Checking database connection...")
  const [connectionStatus, setConnectionStatus] = useState<"checking" | "success" | "error">("checking")
  const [envVars, setEnvVars] = useState({
    url: false,
    key: false,
  })
  const [testResults, setTestResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Check environment variables
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        setEnvVars({
          url: !!supabaseUrl,
          key: !!supabaseKey,
        })

        if (!supabaseUrl || !supabaseKey) {
          setStatus("❌ Missing Environment Variables")
          setConnectionStatus("error")
          setError("NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is missing")
          return
        }

        // Test Supabase connection
        const supabase = createClient()
        
        // Test 1: Simple query
        const { data: profiles, error: profileError } = await supabase
          .from("profiles")
          .select("id, email")
          .limit(1)

        if (profileError) {
          setStatus("❌ Database Connection Failed")
          setConnectionStatus("error")
          setError(profileError.message)
          return
        }

        // Test 2: Check tables exist
        const { data: candidates, error: candidateError } = await supabase
          .from("candidates")
          .select("id")
          .limit(1)

        if (candidateError && candidateError.code !== "PGRST116") {
          setStatus("⚠️ Partial Connection")
          setConnectionStatus("error")
          setError(`Some tables may not exist: ${candidateError.message}`)
          return
        }

        // Success!
        setStatus("✅ Database Connected Successfully!")
        setConnectionStatus("success")
        setTestResults({
          profiles: profiles ? "✅ Accessible" : "❌ Not accessible",
          candidates: candidates ? "✅ Accessible" : "⚠️ May not exist",
          supabaseUrl: supabaseUrl,
        })

      } catch (err) {
        setStatus("❌ Connection Failed")
        setConnectionStatus("error")
        setError(err instanceof Error ? err.message : "Unknown error")
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Database Connection Test</h1>
        <p className="text-slate-600 mb-8">Verify Supabase database connection status</p>

        <div className="space-y-6">
          {/* Status Card */}
          <Card>
            <CardHeader>
              <CardTitle>Connection Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-semibold ${
                connectionStatus === "success" ? "text-green-600" :
                connectionStatus === "error" ? "text-red-600" :
                "text-yellow-600"
              }`}>
                {status}
              </div>
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold">Error:</p>
                  <p className="text-red-600">{error}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Environment Variables Card */}
          <Card>
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {envVars.url ? (
                    <span className="text-green-600">✅</span>
                  ) : (
                    <span className="text-red-600">❌</span>
                  )}
                  <span>NEXT_PUBLIC_SUPABASE_URL</span>
                </div>
                <div className="flex items-center gap-2">
                  {envVars.key ? (
                    <span className="text-green-600">✅</span>
                  ) : (
                    <span className="text-red-600">❌</span>
                  )}
                  <span>NEXT_PUBLIC_SUPABASE_ANON_KEY</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Results Card */}
          {testResults && (
            <Card>
              <CardHeader>
                <CardTitle>Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span>Profiles Table:</span>
                    <span className={testResults.profiles.includes("✅") ? "text-green-600" : "text-red-600"}>
                      {testResults.profiles}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Candidates Table:</span>
                    <span className={testResults.candidates.includes("✅") ? "text-green-600" : "text-yellow-600"}>
                      {testResults.candidates}
                    </span>
                  </div>
                  <div className="mt-4 p-3 bg-slate-50 rounded">
                    <p className="text-sm text-slate-600">Supabase URL:</p>
                    <p className="text-sm font-mono">{testResults.supabaseUrl}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Instructions Card */}
          <Card>
            <CardHeader>
              <CardTitle>What to Check</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Environment variables are set correctly</li>
                <li>Supabase URL is accessible</li>
                <li>Database tables exist</li>
                <li>API keys are valid</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

