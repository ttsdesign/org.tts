@ECHO OFF

SET "NODE_EXE=%~dp0\node_exe.exe"

"%NODE_EXE%" --no-deprecation %*
