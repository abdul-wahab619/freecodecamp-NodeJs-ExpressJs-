const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Create a Short URl!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIxNjI0NjA0NjQxMDE0OTk0OA.G6Ky2C.X-OkrIEOfe6nxPw3Q_KFMx0g2rrSx9TqSqDdlk"
);
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1216246046410149948"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
