const args = process.argv.slice(2);

function setAlarm(time) {
  setTimeout(() => {
    process.stdout.write('Beep!'+'\x07'+'\n');
  }, time * 1000);
};

for (let i = 0; i < args.length; i++) {
  const time = parseInt(args[i]);

  if (!isNaN(time) && time >= 0) {
    setAlarm(time);
  };
};