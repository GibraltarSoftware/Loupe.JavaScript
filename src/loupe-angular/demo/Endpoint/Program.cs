using System;
using System.Diagnostics;

namespace Endpoint
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            using (var process = new Process())
            {
                process.StartInfo.FileName = @"..\..\..\Endpoint\MvcTestApp.exe"; // relative path. absolute path works too.
                //process.StartInfo.Arguments = $"{id}";
                //process.StartInfo.FileName = @"cmd.exe";
                //process.StartInfo.Arguments = @"/c dir";      // print the current working directory information
                process.StartInfo.CreateNoWindow = false;
                process.StartInfo.UseShellExecute = false;
                process.StartInfo.RedirectStandardOutput = true;
                process.StartInfo.RedirectStandardError = true;

                process.OutputDataReceived += (sender, data) => Console.WriteLine(data.Data);
                process.ErrorDataReceived += (sender, data) => Console.WriteLine(data.Data);
                Console.WriteLine("starting");
                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();
                //var exited = process.WaitForExit(1000 * 10);     // (optional) wait up to 10 seconds
                //Console.WriteLine($"exit {exited}");
            }
        }
    }
}
