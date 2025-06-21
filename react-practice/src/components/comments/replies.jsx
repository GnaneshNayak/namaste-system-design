import React from 'react';

const Replies = ({ data }) => {
  return (
    <div>
      {data.map((d, i) => (
        <div
          style={{
            marginBottom: '10px',
            borderLeft: '1px solid black',
            padding: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginTop: '4px',
              }}
              src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
              alt="user"
            />
            <div
              style={{
                marginLeft: '10px',
              }}
            >
              <p
                style={{
                  paddingBottom: '0px',
                }}
              >
                {d.username}
              </p>
              <p> {d.comment}</p>
            </div>
          </div>
          <div
            style={{
              marginLeft: '20px',
            }}
          >
            {d.replies && d.replies.length > 0 && <Replies data={d.replies} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Replies;
