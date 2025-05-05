# Running Vue App on Windows with PowerShell Execution Policy Error

If you encounter the following error when running `npm run serve` or other npm scripts in PowerShell:

```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system. For more 
information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ npm run serve
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

This means that PowerShell's execution policy is preventing scripts from running.

## How to fix

You can temporarily bypass this restriction for the current PowerShell session by running:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

After running this command, try running your npm script again:

```powershell
npm run serve
```

## Permanent fix (optional)

To change the execution policy permanently (requires administrator privileges), run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy RemoteSigned
```

For more information, see the official Microsoft documentation:  
https://go.microsoft.com/fwlink/?LinkID=135170

---

This file was created to help you resolve the PowerShell script execution policy error when running npm scripts.
