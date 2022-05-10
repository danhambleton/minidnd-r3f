from minidnd_api import app
from minidnd_api import db

if __name__ == "__main__":
    db.create_all()
    app.run(ssl_context='adhoc',threaded=True)
